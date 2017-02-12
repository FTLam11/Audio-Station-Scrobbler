'use strict';

const expect = require('chai').expect;
const colors = require('colors');
const httpMock = require('node-mocks-http');
const payload = require('../middleware/payload');

let req = {};
let res = {};

describe('(>")>Payload Middleware #Squish<("<)'.rainbow, function() {
  beforeEach(function(done) {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/auth/q?api_key=123&token=456&secret=789'
    });
    req.body = {
      api_key: '123',
      method: 'auth.getSession',
      token: '456',
      secret: '789'
    }
    res = httpMock.createResponse();
    payload.squish()(req, res, () => {});
    done();
  });

  it('should create a raw API signature', function(done) {
    expect(req.body.api_sig).to.equal('api_key123methodauth.getSessiontoken456789');
    done();
  });
});

describe('(>")>Payload Middleware #Build<("<)'.america, function() {
  beforeEach(function(done) {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/scrobbles/q?artist=TRUONGS&title=NUOCNAM'
    });
    res = httpMock.createResponse();
    payload.build()(req, res, () => {});
    done();
  });

  it('should build the payload for scrobble requests', function(done) {
    expect(req.body.artist).to.equal('TRUONGS');
    expect(req.body.track).to.equal('NUOCNAM');
    expect(req.body).to.have.all.keys(['api_key', 'artist', 'format', 'method', 'sk', 'timestamp', 'track']);
    done();
  });
});