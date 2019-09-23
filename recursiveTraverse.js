'use strict';

const { cwd } = process;
const { join } = require('path');
const { statSync, readdirSync } = require('fs');

const exampleDirs = (dir = cwd()) => readdirSync(dir).filter(
  (file) => statSync(join(dir, file)).isDirectory()
);

module.exports.traverse = (dirs = exampleDirs(cwd())) => {
  return dirs.map((cur) => [cur, exampleDirs(cur)]);
};
