'use strict';

const request = require('../../util/request');
const url = require('../../util/urlBuilder');

let controller = {};

controller.session = (req, res, next) => {
  res.json(url(req.body)());
  // console.log(url(req.body)());
  // request.get(url(req.body))    
};

module.exports = controller;