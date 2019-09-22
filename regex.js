'use strict';

const cssExt = /\.css$/;
const cssModuleExt = /\.module\.css$/;
const sassExt = /\.(scss|sass)$/;
const sassModuleExt = /\.module\.(scss|sass)$/;
const jsExt = /\.[cm]?jsx?$/;
const tsExt = /\.tsx?$/;
const imgExt = /\.bmp|gif|jpe?g|png$/;
const htmlExt = /\.html$/;
const jsonExt = /\.json$/;
const rcExt = /rc(\.js)?$/;
const svgExt = /\.svg$/;
const REACT_APP_PREFIX = /^REACT_APP_/i;
const NODE_ENV = /^NODE_ENV/i;
const REGEX_ESC = /[.*+?^${}()|[\]\\]/g;
const HTML_ESC = /[&<>'"]/g;
const HTML_UNESC = /&amp;|&lt;|&gt;|&#39;|&quot;/g;
const doubleSpace = /\s{2,}/g;
const HTML_ESC_MAP = new Map([
  ['&', '&amp;'],
  ['<', '&lt;'],
  ['>', '&gt;'],
  ["'", '&#39;'],
  ['"', '&quot;']
]);

const HTML_UNESC_MAP = new Map([
  ['&amp;', '&'],
  ['&lt;', '<'],
  ['&gt;', '>'],
  ['&#39;', "'"],
  ['&quot;', '"']
]);

const escapeHTML =
(str) => str.replace(HTML_ESC, (tag) => HTML_ESC_MAP.has(tag) ? HTML_ESC_MAP.get(tag) : tag);

const unescapeHTML =
(str) => str.replace(HTML_UNESC, (tag) => HTML_ESC_MAP.has(tag) ? HTML_ESC_MAP.get(tag) : tag);

const escapeRegExp =
(str) => str.replace(REGEX_ESC, '\\$&');

// A predicate function is a function that takes one value as
// input and returns true/false based on whether the value
// satisfies the condition. isEven() is a predicate function.
function allRegex(string, predicate, obj) {
  let output = [];
  for(const [i, j] of Object.entries(obj)) {
    output = [...output, [i, j.test(string)]];
  }
  return output
    .join(' ')
    .split(' ')
    .filter(predicate);
}

module.exports = {
  HTML_ESC,
  HTML_UNESC,
  HTML_ESC_MAP,
  HTML_UNESC_MAP,
  NODE_ENV,
  REACT_APP_PREFIX,
  REGEX_ESC,
  allRegex,
  cssExt,
  cssModuleExt,
  doubleSpace,
  escapeHTML,
  escapeRegExp,
  imgExt,
  htmlExt,
  jsExt,
  jsonExt,
  rcExt,
  sassExt,
  sassModuleExt,
  svgExt,
  tsExt,
  unescapeHTML,
};
