'use strict';

const express = require('express');
const trackRouter = express.Router();
const controller = require('./trackController');
const env = require('../middleware/loadEnv');
const payload = require('../middleware/payload');
const squish = require('../middleware/payload');
const sign = require('../middleware/signature');
const stringify = require('../middleware/stringify');
const options = require('../middleware/options');

trackRouter.route(/\/q/)
  .get(payload.build(), payload.squish(), sign(), stringify(), options(), controller.create)

module.exports = trackRouter;
