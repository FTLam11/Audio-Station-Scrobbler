'use strict';

const request = require('../../util/request');
const url = require('../../util/urlBuilder');
const log = require('../../util/log');

let controller = {};

controller.session = (req, res, next) => {
  request.get(url(req.body)())
    .then((session) => {
      res.json(session);
    })
    .catch((err) => {
      next(err);
    })
};

module.exports = controller;