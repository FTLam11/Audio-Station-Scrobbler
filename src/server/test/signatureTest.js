'use strict';

const expect = require('chai').expect;
const colors = require('colors');
const httpMock = require('node-mocks-http');
const sign = require('../middleware/signature');

let req = {};
let res = {};

describe('(>")>Signature Middleware<("<)'.rainbow, function() {
  beforeEach(function(done) {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/scrobbles/q?artist=TRUONGS&title=NUOCNAM'
    });
    req.body.api_sig = 'artistTRUONGStitleNUOCNAM';
    res = httpMock.createResponse();
    sign()(req, res, () => {});
    done();
  });

  it('should hash the raw API signature', function(done) {
    expect(req.body.api_sig).to.be.a('string');
    expect(req.body.api_sig).to.have.length(32);
    done();
  });
});