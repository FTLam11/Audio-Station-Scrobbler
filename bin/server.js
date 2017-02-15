'use strict';

require('../env');

const http = require('http');
const config = require('../config');
const app = require('../src/server/webapp');
const log = require('../src/util/log');

let server = http.createServer(app);

server.listen(config.port, () => {
  log.log(`Express server listening on port *:${config.port}`);
});
