'use strict';

const http = require('http');

let request = {};

request.get = function(url) {
  return new Promise((resolve, reject) => {
    let req = http.get(url, (res) => {
      if (res.statusCode == 400) {
        reject(new Error(`GET request to ${url} failed, status: ${res.statusCode}`));
      }

      let body = [];

      res.on('data', (chunk) => body.push(chunk));
      res.on('end', () => resolve(body.join('')));
    });

    req.on('error', (err) => reject(err));
  });
};

module.exports = request;