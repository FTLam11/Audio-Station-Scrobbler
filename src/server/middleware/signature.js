'use strict';

const config = require('../../../config');
const crypto = require('crypto');

module.exports = function() {
  return (req, res, next) => {
    req.body.api_signature = crypto
      .createHash('md5')
      .update(req.body.api_signature, 'utf8')
      .digest('hex');
    next();
  };
};