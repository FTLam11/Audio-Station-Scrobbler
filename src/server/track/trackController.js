'use strict';

const request = require('../../util/request');

let controller = {};
let dataString = "hello";
let options = {
  hostname: 'ws.audioscrobbler.com',
  path: '/2.0/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(dataString)
  }
};

controller.create = (req, res, next) => {
  request.post(options, dataString);
  console.log(request);
  // res.json("AWwWWWWWW Shiiiiiiiiiiiiieeeeeeeeeeeet");
}

controller.test = (req, res, next) => {
  // console.log(req);
  res.json(req);
}

module.exports = controller;