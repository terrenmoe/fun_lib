const { cwd } = require('process');
const { join } = require('path');
const { statSync, readdirSync } = require('fs');


const exampleDirs = (dir = cwd()) => readdirSync(dir).filter((file) => statSync(join(dir, file)).isDirectory());

exports.traverse = (dirs = exampleDirs(cwd())) => {
  for(let i of dirs) {
    console.log(i, exampleDirs(i));
  }
};
