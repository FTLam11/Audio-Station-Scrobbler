require('colors');
const { expect } = require('chai');
const httpMock = require('node-mocks-http');
const parseToken = require('../middleware/parseToken');

let req = {};
let res = {};

describe('(>")>Parse Token Middleware<("<)'.america, () => {
  beforeEach((done) => {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/auth/q?api_key=123&token=456&secret=789',
    });
    res = httpMock.createResponse();
    parseToken()(req, res, () => {});
    done();
  });

  it('should parse the API key', (done) => {
    expect(req.body.api_key).to.equal('123');
    done();
  });

  it('should parse the token', (done) => {
    expect(req.body.token).to.equal('456');
    done();
  });

  it('should parse the secret', (done) => {
    expect(req.body.secret).to.equal('789');
    done();
  });

  it('should set the API method', (done) => {
    expect(req.body.method).to.equal('auth.getSession');
    done();
  });

  it('throws an error if any parameters are missing', (done) => {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/auth/q?api_key=123&token=456',
    });
    res = httpMock.createResponse();
    const parseErr = new Error('Missing parameters for session request.');
    const next = function () { throw parseErr; };

    expect(() => {
      parseToken()(req, res, next);
    }).to.throw(parseErr);
    done();
  });
});
