'use strict';

function subtract(acc, cv) {
  return acc - cv;
}

function add(acc, cv) {
  return acc + cv;
}

function multiply(acc, cv) {
  return acc * cv;
}

function divide(acc, cv) {
  return acc / cv;
}

function mod(acc, cv) {
  return acc % cv;
}

function average(acc, cv, ci, arr) {
  if (ci < (arr.length - 1)) {
    return acc + cv;
  }
  return (acc + cv) / arr.length;
}

// HoC Reducer Functions
function diff(...args) {
  return args.reduce(subtract);
}

function sum(...args) {
  return args.reduce(add);
}

function prod(...args) {
  return args.reduce(multiply);
}

function quo(...args) {
  return args.reduce(divide);
}

function remain(...args) {
  return args.reduce(mod);
}

function mean(...args) {
  return args.reduce(average);
}

function harmMean(...args) {
  return args.map((cur) => 1 / cur).reduce(average);
}

const toOrdinalSuffix = (function ordinalSetup() {
  const toDigits = (num) => [num % 10, num % 100];
  const suffix = new Map([
    [[11, 12, 13], 'th'],
    [[1], 'st'],
    [[2], 'nd'],
    [[3], 'rd'],
  ]);
  const suffixCache = new Map();
  return function toOrdinalSuffix(...args) {
    let output = [];
    for (const num of args) {
      const int = parseInt(num, 10);
      if (suffixCache.has(int)) {
        output = [...output, suffixCache.get(int)];
      }
      if (!suffixCache.has(int)) {
        const digits = toDigits(int);
        for (const [keyArr, suff] of suffix) {
          if (keyArr.includes(digits[1]) || keyArr.includes(digits[0])) {
            suffixCache.set(int, `${int}${suff}`);
            output = [...output, suffixCache.get(int)];
            break;
          }
          if (suff === 'rd') {
            suffixCache.set(int, `${int}th`);
            output = [...output, suffixCache.get(int)];
          }
        }
      }
    }
    return output;
  };
}());

module.exports = {
  sum,
  diff,
  prod,
  quo,
  remain,
  mean,
  harmMean,
  toOrdinalSuffix,
};
/*
  const testNums = [2,1.3,0.6],
  let results = [];
  for(let fn of testFun) {
    let nums = [...testNums];
    results.push(fn(...nums));
  }

  for(let j of testFunNames) {
    console.log(`${j}: ${results.shift()}`);
  }

*/

/*
  const {
   sum,
   diff,
   prod,
   quo,
   remain,
   mean,
   harmMean,
   toOrdinalSuffix
  } = require('./numericReducers');
  */
