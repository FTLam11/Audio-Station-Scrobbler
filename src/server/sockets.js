'use strict';

let io;

// Initialize with provided socket.io instance
exports.init = function(_io) {
  io = _io;
};