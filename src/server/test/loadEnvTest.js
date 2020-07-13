'use strict';

const expect = require('chai').expect;
const colors = require('colors');
const httpMock = require('node-mocks-http');
const loadEnv = require('../middleware/loadEnv');
const saveToEnv = require('../../util/envStore');
const fs = require('fs');

let req = {};
let res = {};

describe('(>")>Env Middleware<("<)'.america, function() {
  beforeEach(function(done) {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/auth'
    });
    res = httpMock.createResponse();
    done();
  });

  afterEach(function(done) {
    fs.writeFileSync('./env.js', '');
    done();
  });

  it('should load all environment variables contained in env.js', function(done) {
    const apiAccount = {
      api_key: 'hi',
      secret: 'there',
      sk: '!'
    };

    Object.keys(apiAccount).forEach((key) => {
      saveToEnv(key, apiAccount[key])();
    });
    loadEnv()(req, res, () => {});

    expect(process.env.API_KEY).to.not.be.an('undefined');
    expect(process.env.SECRET).to.not.be.an('undefined');
    expect(process.env.SK).to.not.be.an('undefined');
    done();
  });
});
