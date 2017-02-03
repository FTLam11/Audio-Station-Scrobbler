'use strict';

const express = require('express');
const authRouter = express.Router();
const controller = require('./authController');

authRouter.param('id', controller.params);

authRouter.route('/')
  .get(controller.index)
  .post(controller.create)

authRouter.route('/new')
  .get(controller.new)

authRouter.route('/:id')
  .get(controller.show)
  .put(controller.update)
  .delete(controller.destroy)

authRouter.route('/:id/edit')
  .get(controller.edit)

module.exports = authRouter;