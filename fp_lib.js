'use strict';

const arity = (fn, n) => (...args) => fn(...args.slice(0, n));
const identity = (val) => val;
const constant = (val) => () => val;
const spreadArgs = (fn) => (args) => fn(...args);
const gatherArgs = (fn) => (...args) => fn(args);
const partArgs = (fn, ...part1) => (...part2) => fn(...part1, ...part2);
const partArgsR = (fn, ...part1) => (...part2) => fn(...part2, ...part1);
const reverseArgs = (fn) => (...args) => fn(...args.reverse());
const not = (tof) => (...args) => !tof(...args);
const when = (tof, fn) => (...args) => tof(...args) ? fn(...args) : undefined;
const over = (...fns) => (...args) => fns.map((fn) => fn(...args));
const rearg = (fn, idxs) => (...args) => fn(...idxs.map((i) => args[i]));
const compose2 = (fn2, fn1) => (ogVal) => fn2(fn1(ogVal));
const curry = (fn, len = fn.length, nextCurried) => (
  nextCurried = (prevArgs) => (nextArg) => {
    let args = [...prevArgs, nextArg];
    if(!(args.length >= len)) return nextCurried(args);
    return fn(...args);
  }
)([]);
const uncurry = (fn) => (...args) => {
  let ret = fn;
  for(let arg of args) {
    ret = ret(arg);
  }
  return ret;
};

const compose = (...fns) => (res) => {
  let list = [...fns];
  while(list.length > 0) {
    // take the last function off the end of the list
    // and execute it
    res = list.pop()(res);
  }
  return res;
};

const sampleSize =
([...arr], n = 1) => {
  let m = arr.length;
  while(m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

const sample =
(arr) => arr[Math.floor(Math.random() * arr.length)];

const shank =
(arr, idx = 0, delCount = 0, ...elements) => {
  arr
    .slice(0, idx)
    .concat(elements)
    .concat(arr.slice(idx + delCount));
};

const stableSort =
(arr, compare) => {
  arr
    .map((item, idx) => ({ item, idx }))
    .sort((a, b) => compare(a.item, b.item) || a.idx - b.idx)
    .map(({ item }) => item);
};

// set functions
const intersection =
(a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};

const difference =
(a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};

const union = (a, b) => Array.from(new Set([...a, ...b]));
const uniqueElements = (arr) => [...new Set(arr)];

// browser based
const detectDeviceType =
(
  regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/,
  prop = navigator.userAgent,
) => regex.test(prop) ? 'Mobile' : 'Desktop';

const getScrollPosition =
(el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

const scrollToTop =
() => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if(c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - (c / 8));
  }
};

const getStyle =
(el, ruleName) => getComputedStyle(el)[ruleName];

const setStyle =
(el, ruleName, val) => el.style.setProperty(ruleName, val);

const redirect =
(url, asLink = true, ele = location) => asLink ? ele.setAttribute('href', url) : ele.replace(url);

const httpsRedirect =
() => {
  if(location.protocol !== 'https:') location.replace(`https://${location.href.split('//')[1]}`);
};

const isBrowserTabFocused = () => !document.hidden;

const clampNumber =
(num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

const luhnCheck =
(num) => {
  let arr = `${num}`
    .split('')
    .reverse()
    .map((x) => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9, 0);
  sum += lastDigit;
  return sum % 10 === 0;
};

const compactWhitespace = (str) => str.replace(/\s{2,}/g, ' ');

const escapeHTML = (str) => {
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
};
const unescapeHTML = (str) =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    (tag) =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"'
      }[tag] || tag)
  );

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const pluralize =
(val, word, plural = `${word}s`) => {
  const _pluralize = (num, _word, _plural = `${word}s`) =>
    [1, -1].includes(Number(num)) ? _word : _plural;

  if(typeof val === 'object') {
    return (num, _word) => _pluralize(num, _word, val[word]);
  }
  return _pluralize(val, word, plural);
};

const stringPermutations = (str) => {
  if(str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map((val) => letter + val)),
      []
    );
};

const siPrefix = (() => {
  const { abs, log10, floor } = Math;
  const PREFIXES = new Map([
    [10 ** 24, 'Y'],
    [10 ** 21, 'Z'],
    [10 ** 18, 'E'],
    [10 ** 15, 'P'],
    [10 ** 12, 'T'],
    [10 ** 9, 'G'],
    [10 ** 6, 'M'],
    [10 ** 3, 'k'],
    [10 ** 2, 'h'],
    [0, ' '],
    [10 ** -2, 'c'],
    [10 ** -3, 'm'],
    [10 ** -6, 'μ'],
    [10 ** -9, 'n'],
    [10 ** -12, 'p'],
    [10 ** -15, 'f'],
    [10 ** -18, 'a'],
    [10 ** -21, 'z'],
    [10 ** -24, 'y']
  ]);

  const isZero = (n) => n === 0;
  const isNeg = (nu) => nu < 0;
  const isFractional = (num) => (num < 1) && (num > -1);

  const getBase10Power =
  (numb) => floor((isNeg(numb) ? -1 : 1) * log10(abs(numb)));

  const getAbsScienceForm =
  (numbe, p) => Number((abs(numbe) / abs(10 ** getBase10Power(numbe))).toPrecision(p));

  const getPrefix =
  (nume) => PREFIXES.has(nume) ? PREFIXES.get(nume) : '??';

  return (numeric, sep = '', precision = 3) => {
    let [zero, fractional, neg] = [
      isZero(numeric),
      isFractional(numeric),
      isNeg(numeric)
    ];
    if(zero) return 0;
    if(fractional) {
      if(neg) {
        return -1;
      } else {
        return 1;
      }
    }
    let [sign, numOut, prefix] = [
      neg ? '-' : '',
      getAbsScienceForm(numeric, precision),
      getPrefix(10 ** getBase10Power(numeric))
    ];
    return `${sign}${numOut}${sep}${prefix}`;
  };
})();

module.exports = {
  arity,
  identity,
  constant,
  spreadArgs,
  gatherArgs,
  partArgs,
  partArgsR,
  reverseArgs,
  curry,
  uncurry,
  not,
  when,
  compose2,
  compose,
  over,
  rearg,
  sampleSize,
  sample,
  shank,
  stableSort,
  intersection,
  difference,
  union,
  uniqueElements,
  detectDeviceType,
  getScrollPosition,
  scrollToTop,
  getStyle,
  setStyle,
  httpsRedirect,
  isBrowserTabFocused,
  redirect,
  clampNumber,
  luhnCheck,
  compactWhitespace,
  pluralize,
  stringPermutations,
  siPrefix,
  escapeHTML,
  unescapeHTML,
  escapeRegExp
};
