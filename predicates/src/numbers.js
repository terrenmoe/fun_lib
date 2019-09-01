'use strict';

const isZero = (n) => n === 0;
const isNonZero = (n) => !isZero(n);
const isFraction = (n) => isNonZero(n) && (n < 1) && (n > -1);
const isNeg = (n) => n < 0;
const isPos = (n) => !isNeg(n);

module.exports = {
  isZero,
  isNonZero,
  isFraction,
  isNeg,
  isPos
};
