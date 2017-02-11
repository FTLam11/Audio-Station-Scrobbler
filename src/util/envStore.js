'use strict';

const fs = require('fs');

// Save API info to be loaded as environment variables later
module.exports = function(key, value) {
  return () => {
    fs.appendFile('./env.js', 
      `process.env['${key.toUpperCase()}'] = '${value}'\n`, 
      'utf8', 
      (err) => console.log(err));
  };
};