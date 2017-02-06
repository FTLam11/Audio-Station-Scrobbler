'use strict';

const express = require('express');
const authRouter = express.Router();
const controller = require('./authController');
const parse = require('../middleware/parse');
const payload = require('../middleware/payload');

authRouter.route(/\/q/)
  .get(parse(), payload.squish(), controller.session)

module.exports = authRouter;