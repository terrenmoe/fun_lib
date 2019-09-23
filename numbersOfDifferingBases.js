#!/usr/bin/node
'use strict';

// Setup
// base 16 radix value
const HEX_RADIX = 16;
// callbacks
// Number.prototype.toString(radix)
const toHex = (num) => num.toString(HEX_RADIX);
// global parseInt(value,radix)
const toDeci = (str) => parseInt(str, HEX_RADIX);

// Demo
// Array used to map to hex
const initalBase10 = [15, 31, 47, 63, 79, 95];
// initalBase10 values mapped to an array of hex strings equal in value
const base16Mapped = initalBase10.map(toHex);
// Reversing the operation with base16Mapped to base 10 numbers
const base10Mapped = base16Mapped.map(toDeci);

console.log(
  base16Mapped
);
// → [ 'f', '1f', '2f', '3f', '4f', '5f' ]
console.log(
  base10Mapped
);
// → [ 15, 31, 47, 63, 79, 95 ]
