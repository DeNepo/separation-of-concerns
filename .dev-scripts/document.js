import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import { exec } from 'child_process';

import dependencyCruiser from 'dependency-cruiser';
const { cruise } = dependencyCruiser;

import graphvizCLI from 'graphviz-cli';
const { renderGraphFromSource } = graphvizCLI;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cruiserOptions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', '.dependency-cruiser.json'),
    'utf-8',
  ),
);

const passedPath = process.argv[2];

const ROOT = path.join(__dirname, '..', passedPath || '');

const CRUISABLE_PATH_NAMES = [
  // 'isolate',
  // 'presentation',
  'src',
  'data-access',
  'function-roles',
];
const IGNORABLE_PATHS = ['.git', 'node_modules'];

if (!fs.existsSync(ROOT)) {
  throw new Error(`/${passedPath} is not a path in this directory`);
}

const findCruisablePaths = async (dirPath) => {
  if (
    IGNORABLE_PATHS.some((ignorable) =>
      dirPath.toLowerCase().includes(ignorable),
    )
  ) {
    return [];
  }

  const pathsToCruise = [];

  if (
    CRUISABLE_PATH_NAMES.some((name) =>
      dirPath.split(path.sep).pop().includes(name),
    )
  ) {
    pathsToCruise.push(dirPath);
  }

  const contents = fs.readdirSync(dirPath);
  for (const thing of contents) {
    const absThingPath = path.join(dirPath, thing);
    if (fs.lstatSync(absThingPath).isDirectory()) {
      const cruisables = findCruisablePaths(absThingPath);
      pathsToCruise.push(cruisables);
    }
  }

  return Promise.all(pathsToCruise);
};

findCruisablePaths(ROOT)
  .then((unflatPaths) => unflatPaths.flat(Infinity))
  .then(async (paths) => {
    const cruised = paths.map((path) => ({
      path,
      graph: cruise([path], cruiserOptions).output,
    }));

    for (const project of cruised) {
      renderGraphFromSource({ input: project.graph }, { format: 'svg' })
        .then((svgGraph) => {
          const graphBasePath = path.join(
            project.path,
            project.path.includes('src') ? '..' : '',
            'dependency-graph',
          );
          fs.writeFile(`${graphBasePath}.svg`, svgGraph, 'utf-8', (err) => {
            console.log(project.path);
            err && console.error(err);
          });
        })
        .catch((err) => console.error(err));
    }

    // await import(
    //   '../node_modules/dependency-cruiser/bin/wrap-stream-in-html.js'
    // );

    // for (const path of paths) {
    //   console.log(path);
    // }
  })
  .catch((err) => console.error(err));
