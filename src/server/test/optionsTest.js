'use strict';

const expect = require('chai').expect;
const colors = require('colors');
const httpMock = require('node-mocks-http');
const stringify = require('../middleware/stringify');
const options = require('../middleware/options');

let req = {};
let res = {};

describe('(>")>Options Middleware<("<)'.america, function() {
  beforeEach(function(done) {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/tracks/q?artist=truongs&title=nuocnam'
    });
    res = httpMock.createResponse();
    stringify()(req, res, () => {});
    options()(req, res, () => {});
    done();
  });

  it('should set a hostname to the request body', function(done) {
    expect(req.body.options).to.have.property('hostname', 'ws.audioscrobbler.com');
    done();
  });

  it('should specify a path for the API', function(done) {
    expect(req.body.options).to.have.property('path', '/2.0/');
    done();
  });

  it('should set the request HTTP method', function(done) {
    expect(req.body.options).to.have.property('method', 'POST');
    done();
  });

  it('should set the request headers', function(done) {
    expect(req.body.options).to.have.deep.property('headers.Content-Type', 'application/x-www-form-urlencoded');
    done();
  });

  it('should set the request content length', function(done) {
    expect(req.body.options).to.have.deep.property('headers.Content-Length')
      .that.is.a('Number');
    done();
  });
})
