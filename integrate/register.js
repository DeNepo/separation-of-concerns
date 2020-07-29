// require native modules
const fs = require("fs");
const path = require("path");
const config = require("./config.json");

// declare constants
const EXERCISES_DIR = path.normalize(path.join(__dirname, config.path));
// const EXERCISES_DIR = __dirname;
const EXAMPLE_WORDS = ['example', 'examples', 'worked', 'stepped', 'demo'];
const IGNORE = config.ignore;
const PARENT_DIR = path.normalize(path.join(__dirname, '..'));

// make sure the exercises directory exists
try {
  fs.accessSync(EXERCISES_DIR);
} catch (err) {
  // console.log(`--- creating ${config.path} directory ---`);
  console.log(`--- creating /isolate directory ---`);
  fs.mkdirSync(EXERCISES_DIR);
};

// a function for prettier logs, not very important
const removeDirname = dirName => dirName.split(PARENT_DIR).join('  ...  ');

// the function that will create an object with the same file paths as your /exercises folder
const register = function (dirPath) {
  const dirs = [];
  const files = [];

  // get an array of all file names in the directory
  const paths = fs.readdirSync(dirPath);

  for (let nextPath of paths) {
    // if the file/folder name contains an example word, label it as such
    const isExample = EXAMPLE_WORDS
      .reduce((itIs, exampleWord) => {
        return itIs || nextPath.toLowerCase().includes(exampleWord);
      }, false);

    // is the next path a directory or a file?
    const isDirectory = fs.statSync(path.normalize(path.join(dirPath, nextPath))).isDirectory();
    if (nextPath.includes('.git') || !isDirectory && path.extname(nextPath) !== '.html') { continue; }
    if (nextPath === 'index.html' && root) { root = false; continue; }


    if (isDirectory) {

      // recursively register the path if it's a directory
      //  this will create a virtual folder structure for this path

      const subDir = register(path.normalize(path.join(dirPath, nextPath)));

      if (IGNORE.includes(nextPath)) {
        subDir.ignore = true;
      }

      if (subDir) {
        // add the registered sub-directory to the current virtual directory
        dirs.push(subDir);
        if (isExample) subDir.isExample = isExample;
      };

      const dirConfigPath = path.join(dirPath, nextPath, 'config.json');
      if (fs.existsSync(dirConfigPath)) {
        const subConfigStr = fs.readFileSync(dirConfigPath, 'utf-8');
        const subConfig = JSON.parse(subConfigStr);
        subDir.config = subConfig;
      }

    } else {
      // create a file path object, and push it into the array of files in this directory
      const fileData = { path: '/' + nextPath };
      if (isExample) fileData.isExample = isExample;
      files.push(fileData);
    }
  };

  // if the folder contains no .html files, ignore it
  const noExercises = files.length === 0 && dirs.length === 0;
  if (noExercises) {
    return null;
  };

  // create the new virtual directory object
  const virDir = {
    //  convert the absolute path to a relative path using unix file separators
    path: '/' + dirPath
      .split(path.sep).join('/')
      .split('/').pop(),
  };

  // add the virtual files & sub-directories if they exist
  if (dirs.length > 0) { virDir.dirs = dirs; }
  if (files.length > 0) {
    const readme = files
      .find(fileObj => fileObj.path.toLowerCase() === '/readme.html')
    if (readme) {
      virDir.files = files
        .filter(fileObj => fileObj !== readme);
      virDir.files.unshift(readme)
    } else {
      virDir.files = files;
    }
  };

  // return the new virtual directory
  return virDir;
};


console.log('\n--- registering .html files in ' + removeDirname(EXERCISES_DIR) + ' ---\n');

// register the /exercises directory
let root = true;
const registered = register(EXERCISES_DIR);
// merge the repository config into the virtual directory
registered.config = config;
// set the date/time of last build
// registered.lastBuild = (new Date()).toJSON();

console.log('\n--- writing /index.json ---\n');

// write the file
const stringifiedReg = JSON.stringify(registered, null, '  ');
fs.writeFileSync(path.normalize(path.join(__dirname, 'index.json')), stringifiedReg);


console.log('\n--- writing /README.md table of contents ---\n');

const tableOfContents = (virDir, path, indent) => {
  indent = indent || '';
  path = path || '';
  const dirList = virDir.dirs
    ? virDir.dirs
      .map(subDir => {
        const subIndex = tableOfContents(subDir, path + subDir.path, indent + '  ');
        // const reviewPath = path + subDir.path;
        return `${indent}- ${subDir.path}`
          + (subIndex ? '\n' + subIndex : '\n')
        // return `${indent}- [${subDir.path}](.${reviewPath})`
        //   + (subIndex ? '\n' + subIndex : '\n');
      })
      .reduce((list, li) => list + li, '')
    : '';

  const filesList = virDir.files
    ? virDir.files
      .map(file => {
        const reviewPath = path + file.path;
        return `${indent}- <a href=".${reviewPath}" target="_blank">${file.path}</a>\n`
        // return `${indent}- [${file.path}](.${reviewPath})\n`
      })
      .reduce((list, li) => list + li, '')
    : '';
  return filesList + dirList;
}

const newToc = tableOfContents(registered);
const tocRegex = /(<!--[ \t]*BEGIN TOC[ \t]*-->)([^;]*)(<!--[ \t]*END TOC[ \t]*-->)/;
const tocReplacer = `<!-- BEGIN TOC -->\n${newToc}\n<!-- END TOC -->`;
const readmePath = path.normalize(path.join(EXERCISES_DIR, 'README.md'));
const oldReadme = fs.existsSync(readmePath)
  ? fs.readFileSync(readmePath, 'utf-8')
  : '';
const newReadme = oldReadme.match(tocRegex)
  ? oldReadme.replace(tocRegex, tocReplacer)
  : `${oldReadme}\n\n${tocReplacer}`;
fs.writeFileSync(readmePath, newReadme);
