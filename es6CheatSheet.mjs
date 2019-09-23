/* eslint-disable max-len,no-undef,no-unused-vars,no-console,import/no-duplicates,node/no-missing-import,import/no-unresolved,no-duplicate-imports */
/**
 * @file es6CheatSheet.mjs
 * @desc a cheatsheet for es6 features
 */

// Imports
import 'helpers';
// aka: require('···')
import Express from 'express';
// aka: const Express = require('···').default || require('···')
import { indent } from 'helpers';
// aka: const indent = require('···').indent
import * as Helpers from 'helpers';
// aka: const Helpers = require('···')
import { indentSpaces as indented } from 'helpers';
// aka: const indent = require('···').indentSpaces
/**
 * import is the new require().
 */

// Block scoping
function byteVals(bool) {
  /**
   * @keyword {const}
   * @desc assignment which cannot change its typeof assignment
   */
  const byte = 2 ** 8; // Exponent operator: as if Math.pow(2, 8)
  if (bool) {
    // let
    // is only inside this `if`
    // Binary, octal and hexadecimal literals
    const bin = 0b111101101;
    const oct = 0o755;
    const hex = 0x1ED;
    return [bin, oct, hex];
  }
  return byte;
}

/*
  let is the new var.
  const works just like let, but can’t be reassigned.
*/

// Back tick strings
// Interpolation
const message = `Hello ${name}`;
// Multi-line strings
const str = `${'hello'.repeat(3)}
${message}
${byteVals(true)}
${'\u1E9B\u0323'.normalize('NFC')}
`;
str.includes('ll');
str.startsWith('he');

/**
 * New string methods .repeat .includes .startsWith .normalize
 * Templates and multi-line strings.
 */
// Classes
class Shape {
  constructor({ position, dimensions }) {
    this.pos.x = position.x;
    this.pos.y = position.y;
    this.dim.w = dimensions.w;
    this.dim.h = dimensions.h;
  }
  expand(...coordinates) {
    const [x = 0, y = 0, w = 0, h = 0] = coordinates;
    return [
      this.pos.x + x,
      this.pos.y + y,
      this.dim.w + w,
      this.dim.h + h,
    ];
  }
}

class Circle extends Shape {
  // Constructor
  constructor({ x, y, radius }) {
    super(x, y);
    this.radius = radius;
    this.diameter = radius * 2;
  }
  // Methods
  get area() {
    return Math.PI * 2 * this.radius;
  }

  set area(n) {
    this.radius = n;
  }
  // Calling superclass methods
  expand(n) {
    return super.expand(n)[0] * Math.PI;
  }
  // Static methods
  static createFromDiameter(diameter) {
    return new Circle(diameter / 2);
  }
}
/**
 * Syntactic sugar for prototypes.
 */

// Promises
// Making promises
new Promise((resolve, reject) => {
  if (ok) resolve(result);
  else reject(error);
});

// Using promises
myPromise
  .then((result) => result)
  .catch((error) => error);

// Promise functions
Promise.all();
Promise.race();
Promise.reject();
Promise.resolve();

// Async-await
async function run() {
  const user = await getUser();
  const tweets = await getTweets(user);
  return [user, tweets];
}
/**
 * async functions are another way of using functions.
 * Used in place of Generators to better describe asynchronicity
 * While still appearing synchronous
 * Uses await keyword to suspend the execution of its function
 * until the promise resolution allows assignment to response value
 */

// Destructuring assignment
// Array destructuring
const [first, last] = ['Nikola', 'Tesla'];
// Object destructuring
const { title, author } = {
  title: 'The Silkworm',
  author: 'R. Galbraith'
};
/**
 * Supports for matching arrays and objects
 * Righthand side can be a variable instead of a literal
 */

// Default values
const scores = [22, 33];
const [math = 50, sci = 50, arts = 50] = scores;
// → math = 22;
// → sci = 33;
// → arts = 50;
/**
 * Default values can be assigned while destructuring arrays or objects
 */

// Function argument destructuring
function greet1({ name, greeting }) {
  console.log(`${greeting}, ${name}!`);
}
greet({ name: 'Larry', greeting: 'Ahoy' });
/**
 * Destructuring of objects and arrays can be also be done in
 * function arguments.
 */

// Default values & destructuring
function greet2({ name = 'Rauno' } = {}) {
  console.log(`Hi ${name}!`);
}
greet(); // Hi Rauno!
greet({ name: 'Larry' }); // Hi Larry!

// Reassigning keys in destructured variables
function printCoordinates({ left: x, top: y }) {
  console.log(`x: ${x}, y: ${y}`);
}
printCoordinates({ left: 25, top: 90 });
/**
 * This example assigns x to the value of the left key.
 */

// Loops
for (const { title, artist } of songs) console.log(`${title}:${artist}`);
/**
 * The assignment expressions work in loops, too.
 */

// Object spread
// with Object spread
const defaults = { key: value };
let options = {
  defaults,
  visible: true
};
// without Object spread
/* let */ options = Object.assign(
  {}, defaults,
  { visible: true }
);
/**
 * The Object spread operator lets you build new objects from other objects.
 */

// Array spread
// with Array spread
let users = [
  ...admins,
  ...editors,
  'rstacruz'
];

// without Array spread
/* let */ users = admins
  .concat(editors)
  .concat(['rstacruz']);
/**
 * The spread operator lets you build new arrays in the same way.
 */

// Function arguments
// Default function arguments
function greet3(name = 'Jerry') {
  return `Hello ${name}`;
}
// Rest arguments
function fn2(x, ...y) {
  // y is an Array
  return x * y.length;
}
// Spread
fn(...[1, 2, 3]);
// same as fn(1, 2, 3)
/**
 * Default, rest, spread.
 */

// Fat arrows
people.map((person) => person.nicknames[0] || person.firstName);
// vs.
people.map((person) => person.nicknames[0] || person.firstName);
// syntax variation
people.map((person) => person.nicknames[0] || person.firstName);
// Multiple parameters? need ( )
people.map((person, idx) => person.nicknames[0] || person.firstName);
// Parameter destructuring? need ( )
people.map(({ person }) => person.nicknames[0] || person.firstName);
// Parameter default? need ( )
people.map((person = {}) => person.nicknames[0] || person.firstName);
// Returning an object? need ( )
people.map((person) =>
  ({ preferredName: person.nicknames[0] || person.firstName })
);
/**
 * Like functions but with this preserved.
 */

// Objects
// Shorthand syntax
module.exports = { hello, bye };
/**
 * Same as: module.exports = { hello: hello, bye: bye }
 */

// Methods
const App = {
  start() {
    console.log('running');
  }
};
/**
 * Same as: App = { start: function () {···} }
 */

// Getters and setters
const Application = {
  get closed() {
    return this.status === 'closed';
  },
  set closed(value) {
    this.status = value ? 'closed' : 'open';
  }
};
// Computed property names
const event = 'click';
const handlers = { [`on${event}`]: true };
/**
* Same as: handlers = { 'onclick': true }
*/

// Exports
export default function() {}
// aka: module.exports.default = ···
export function myMethod() {}
// aka: module.exports.myMethod = ···
export const pi = 3.14159;
// aka: module.exports.pi = ···
/**
 * export is the new module.exports.
 */

// Generators
function* idMaker(limit) {
  let id = 0;
  while (id < limit) yield id++;
}

const generatorIterable = idMaker(8);
generatorIterable.next().value; // → 0
generatorIterable.next().value; // → 1
generatorIterable.next().value; // → 2
// For..of iteration
for (const i of generatorIterable) i; // → 3 → 4 → 5 → 6 → 7 → 8
/**
 * for..of loops over iterables such as the return of a Generator
 */
