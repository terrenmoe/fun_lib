'use strict';

const httpPost = (url, data, cb, err = console.error) => {
  const req = new XMLHttpRequest();
  req.open('POST', url, true);
  req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  req.onload = () => cb(req.responseText);
  req.onerror = () => err(req);
  req.send(data);
};

const parseCookie = (str) =>
  str
    .split(';')
    .map((v) => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

module.exports = {
  httpPost,
  parseCookie,
  serializeCookie,
};
