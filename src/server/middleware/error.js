'use strict'

const log = require('../../util/log');

// Catch all error handler
module.exports = () => {
  return function(err, req, res, next) {
    if (err) {
      log.error(err.stack);
      res.status(500).send(err);
    }
  };
};