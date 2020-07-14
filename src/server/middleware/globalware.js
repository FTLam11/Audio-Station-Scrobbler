const morgan = require('morgan');
const bodyParser = require('body-parser');

// Setup global middleware
module.exports = function (app) {
  app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
