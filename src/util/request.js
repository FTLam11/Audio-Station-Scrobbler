const http = require('http');

const request = {};

request.get = function (url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      const body = [];

      res.on('data', (chunk) => body.push(chunk));
      res.on('end', () => resolve(body.join('')));
    });

    req.on('error', (err) => reject(err));
  });
};

request.post = function (options, data) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      res.setEncoding('utf8');
      console.debug(`STATUS: ${res.statusCode}`);
      console.debug(`HEADERS: ${JSON.stringify(res.headers)}`);

      const body = [];

      res.on('data', (chunk) => body.push(chunk));
      res.on('end', () => resolve(body.join('')));
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
};

module.exports = request;
