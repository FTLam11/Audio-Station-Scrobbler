'use strict';

const request = require('../../util/request');
const stringify = require('../middleware/stringify');

let controller = {};

controller.session = (req, res, next) => {
  res.json(req.body);
};

module.exports = controller;