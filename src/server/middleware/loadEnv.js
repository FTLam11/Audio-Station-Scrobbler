'use strict';

// Load Last.FM API info
module.exports = function() {
  return (req, res, next) => {
    require('../../../env.js');
    next();
  };
};