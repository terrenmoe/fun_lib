'use strict';

// browser based
const detectDeviceType =
(
  regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/,
  prop = navigator.userAgent,
) => (regex.test(prop) ? 'Mobile' : 'Desktop');

const getScrollPosition =
(el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

const scrollToTop =
() => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - (c / 8));
  }
};

const getStyle =
(el, ruleName) => getComputedStyle(el)[ruleName];

const setStyle =
(el, ruleName, val) => el.style.setProperty(ruleName, val);

const redirect =
(url, asLink = true, ele = location) => (asLink ? ele.setAttribute('href', url) : ele.replace(url));

const httpsRedirect =
() => {
  if (location.protocol !== 'https:') location.replace(`https://${location.href.split('//')[1]}`);
};

const isBrowserTabFocused = () => !document.hidden;

const browserFun = {
  detectDeviceType,
  getScrollPosition,
  scrollToTop,
  getStyle,
  setStyle,
  redirect,
  httpsRedirect,
  isBrowserTabFocused
};

module.exports.default = browserFun;
