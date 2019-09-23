'use strict';

const { cwd } = process;
const { join } = require('path');
const { statSync, readdirSync } = require('fs');

const exampleDirs = (dir = cwd()) => readdirSync(dir).filter(
  (file) => statSync(join(dir, file)).isDirectory()
);

const traverse = (dirs = exampleDirs(cwd())) => {
  for (const i of dirs) {
    console.log(i, exampleDirs(i));
  }
};

module.exports.traverse = traverse;
