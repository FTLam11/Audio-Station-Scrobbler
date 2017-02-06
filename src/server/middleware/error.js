'use strict'

const log = require('../../util/log');

module.exports = () => {
  return function(err, req, res, next) {
    if (err) {
      log.error(err.stack);
      res.status(500).send(err);
    }
  };
};