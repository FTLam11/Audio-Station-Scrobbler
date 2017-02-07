'use strict';

const fs = require('fs');

module.exports = function(key, value) {
  return () => {
    fs.appendFile('./env.js', `process.env['${key.toUpperCase()}'] = '${value}'\n`, 'utf8', function(err) {
      console.log(err);
    });
  };
};