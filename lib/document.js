import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import dependencyCruiser from 'dependency-cruiser';
const { cruise } = dependencyCruiser;

import graphvizCLI from 'graphviz-cli';
const { renderGraphFromSource } = graphvizCLI;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const passedPath = process.argv[2];

const ROOT = path.join(__dirname, '..', passedPath || '');

const CRUISABLE_PATH_NAMES = ['src'];
const IGNORABLE_PATHS = ['.git', 'node_modules'];

if (!fs.existsSync(ROOT)) {
  throw new Error(`/${passedPath} is not a path in this directory`);
}

const findCruisablePaths = async (dirPath) => {
  if (IGNORABLE_PATHS.includes(dirPath.split(path.sep).pop())) {
    return [];
  }

  if (CRUISABLE_PATH_NAMES.includes(dirPath.split(path.sep).pop())) {
    return [dirPath];
  }

  const pathsToCruise = [];

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
  .then((paths) => {
    const cruised = paths.map((path) => ({
      path,
      graph: cruise([path], { outputType: 'dot' }).output,
    }));

    for (const project of cruised) {
      console.log(project.path);
      renderGraphFromSource({ input: project.graph }, { format: 'svg' })
        .then((svgGraph) =>
          fs.writeFile(
            path.join(project.path, '..', 'dependency-graph.svg'),
            svgGraph,
            'utf-8',
            (err) => err && console.err(err),
          ),
        )
        .catch((err) => console.error(err));
    }
  })
  .catch((err) => console.error(err));
