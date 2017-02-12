'use strict';

const http = require('http');

let request = {};

request.get = function(url) {
  return new Promise((resolve, reject) => {
    let req = http.get(url, (res) => {
      let body = [];

      res.on('data', (chunk) => body.push(chunk));
      res.on('end', () => resolve(body.join('')));
    });

    req.on('error', (err) => reject(err));
  });
};

request.post = function(options, data) {
  return new Promise((resolve, reject) => {
    let req = http.request(options, (res) => {
      res.setEncoding('utf8');
      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

      let body = [];

      res.on('data', (chunk) => body.push(chunk));
      res.on('end', () => resolve(body.join('')));
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
};

module.exports = request;