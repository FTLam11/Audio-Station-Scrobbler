'use strict';

const expect = require('chai').expect;
const colors = require('colors');
const httpMock = require('node-mocks-http');
const stringify = require('../middleware/stringify');

let req = {};
let res = {};

describe('(>")>Stringify Middleware<("<)'.rainbow, function() {
  beforeEach(function(done) {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/scrobbles/q?artist=TRUONGS&title=NUOCNAM'
    });
    req.body.artist = 'TRUONGS';
    req.body.track = 'NUOCNAM';
    res = httpMock.createResponse();
    stringify()(req, res, () => {});
    done();
  });

  it('should stringify all keys and values in the request body', function(done) {
    expect(req.body.dataString).to.equal('artist=TRUONGS&track=NUOCNAM');
    done();
  });
});