'use strict';

const expect = require('chai').expect;
const colors = require('colors');
const httpMock = require('node-mocks-http');
const loadEnv = require('../middleware/loadEnv');

let req = {};
let res = {};

describe('(>")>Env Middleware<("<)'.america, function() {
  beforeEach(function(done) {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/auth',
    });
    res = httpMock.createResponse();
    done();
  });

  it('should load all environment variables contained in env.js', function(done) {
    loadEnv()(req, res, () => console.log("Stand-in"));
    expect(process.env.API_KEY).to.not.be.an('undefined');
    done();
  });
});