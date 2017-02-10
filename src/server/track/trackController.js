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
  // create a scrobbling queue, since NAS submits 
  // lyric requests for the currently playing song
  // and the next song in playlist
  // Last.fm uses 4 minutes as the time interval for scrobbles
}

controller.test = (req, res, next) => {
  console.log("SUP DAWG");
  res.json("We fucking did it");
}

module.exports = controller;