'use strict';

const express = require('express');
const authRouter = express.Router();
const controller = require('./authController');
const parse = require('../middleware/parse');
const payload = require('../middleware/payload');
const sign = require('../middleware/signature');
const env = require('../middleware/loadEnv');

authRouter.route(/\/q/)
  .get(parse(), payload.squish(), sign(), controller.session, env(), controller.end)

module.exports = authRouter;