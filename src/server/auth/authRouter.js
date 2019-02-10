'use strict';

const express = require('express');
const authRouter = express.Router();
const controller = require('./authController');
const parseToken = require('../middleware/parseToken');
const payload = require('../middleware/payload');
const sign = require('../middleware/signature');
const env = require('../middleware/loadEnv');

authRouter.route(/\/q/)
  .get(parseToken(), payload.squish(), sign(), controller.session, env(), controller.end)

module.exports = authRouter;
