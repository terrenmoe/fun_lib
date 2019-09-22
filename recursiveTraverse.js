const { cwd } = require('process');
const { join } = require('path');
const { statSync, readdirSync } = require('fs');


const exampleDirs = (dir = cwd()) => readdirSync(dir).filter((file) => statSync(join(dir, file)).isDirectory());

const traverse = (dirs = exampleDirs(cwd())) => {dirs.map(i, exampleDirs(i))}

exports.traverse = traverse;
