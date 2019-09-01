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
// array used to map to hex
const initalBase10 = [16, 32, 48, 64, 80, 96];

// Demo
// initalBase10 values mapped to an array of hex strings equal in value
const base16Mapped = initalBase10.map(toHex);
// reversing the operation with base16Mapped to base 10 numbers
const base10Mapped = base16Mapped.map(toDeci);

console.log(base16Mapped);
// [ '10', '20', '30', '40', '50', '60' ]
console.log(base10Mapped);
// [ 16, 32, 48, 64, 80, 96 ]
