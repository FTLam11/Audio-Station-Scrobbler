require('colors');
const { expect } = require('chai');
const httpMock = require('node-mocks-http');
const stringify = require('../middleware/stringify');
const options = require('../middleware/options');

let req = {};
let res = {};

describe('(>")>Options Middleware<("<)'.america, () => {
  beforeEach((done) => {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/tracks/q?artist=truongs&title=nuocnam',
    });
    res = httpMock.createResponse();
    stringify()(req, res, () => {});
    options()(req, res, () => {});
    done();
  });

  it('should set a hostname to the request body', (done) => {
    expect(req.body.options).to.have.property('hostname', 'ws.audioscrobbler.com');
    done();
  });

  it('should specify a path for the API', (done) => {
    expect(req.body.options).to.have.property('path', '/2.0/');
    done();
  });

  it('should set the request HTTP method', (done) => {
    expect(req.body.options).to.have.property('method', 'POST');
    done();
  });

  it('should set the request headers', (done) => {
    expect(req.body.options).to.have.deep.property('headers.Content-Type', 'application/x-www-form-urlencoded');
    done();
  });

  it('should set the request content length', (done) => {
    expect(req.body.options).to.have.deep.property('headers.Content-Length')
      .that.is.a('Number');
    done();
  });
});
