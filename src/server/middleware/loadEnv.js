'use strict';

module.exports = function() {
  return (req, res, next) => {
    require('../../../env.js');
    next();
  };
};