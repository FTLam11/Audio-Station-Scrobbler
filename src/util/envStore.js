'use strict';

const fs = require('fs');

// Save API info to be loaded as environment variables later
module.exports = function(key, value) {
  return () => {
    process.env[`${key.toUpperCase()}`] = value;
    fs.appendFileSync('./env.js',
      `process.env['${key.toUpperCase()}'] = '${value}'\n`)
  };
};
