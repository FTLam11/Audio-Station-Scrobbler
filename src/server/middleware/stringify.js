'use strict';

const querystring = require('querystring');

let string = {};

module.exports = function() {
  return (req, res, next) => {
    req.body.dataString = querystring.stringify(req.body);
    next();
  };
};