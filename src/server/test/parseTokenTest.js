'use strict';

const expect = require('chai').expect;
const colors = require('colors');
const httpMock = require('node-mocks-http');
const parseToken = require('../middleware/parseToken');

let req = {};
let res = {};

describe('(>")>Parse Token Middleware<("<)'.america, function() {
  beforeEach(function(done) {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/auth/q?api_key=123&token=456&secret=789'
    });
    res = httpMock.createResponse();
    parseToken()(req, res, () => console.log("Next"));
    done();
  });

  it('should parse the API key', function(done) {
    expect(req.body.api_key).to.equal('123');
    done();
  });

  it('should parse the token', function(done) {
    expect(req.body.token).to.equal('456');
    done();
  });

  it('should parse the secret', function(done) {
    expect(req.body.secret).to.equal('789');
    done();
  });

  it('should set the API method', function(done) {
    expect(req.body.method).to.equal('auth.getSession');
    done();
  });

  xit('throws an error if any parameters are missing', function(done) {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/auth/q?api_key=123&token=456'
    });
    res = httpMock.createResponse();
    done();
  });  
});