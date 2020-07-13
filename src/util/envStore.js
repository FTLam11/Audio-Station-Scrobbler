'use strict';

const fs = require('fs');

// Save API info to be loaded as environment variables later
module.exports = function(key, value) {
  return () => {
    const envar = key.toUpperCase();

    process.env[envar] = value;
    fs.appendFileSync('./env.js', `process.env['${envar}'] = '${value}'\n`)
  };
};
