const express = require('express');
const routes = require('./routes');
const middleware = require('./middleware/globalware');
const errorHandler = require('./middleware/error');

const app = express();

app.set('x-powered-by', false);

// Configure middleware
middleware(app);

// Add special header to all responses
app.use('/', (request, response, next) => {
  response.set('DIAM-LA', 'TRUE');
  next();
});

// Mount application routes
app.use('/', routes);

// Error handling
app.use(errorHandler());

// Export Express webapp instance
module.exports = app;
