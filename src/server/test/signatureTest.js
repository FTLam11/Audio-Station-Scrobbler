require('colors');
const { expect } = require('chai');
const httpMock = require('node-mocks-http');
const sign = require('../middleware/signature');

let req = {};
let res = {};

describe('(>")>Signature Middleware<("<)'.rainbow, () => {
  beforeEach((done) => {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/scrobbles/q?artist=TRUONGS&title=NUOCNAM',
    });
    req.body.api_sig = 'artistTRUONGStitleNUOCNAM';
    res = httpMock.createResponse();
    sign()(req, res, () => {});
    done();
  });

  it('should hash the raw API signature', (done) => {
    expect(req.body.api_sig).to.be.a('string');
    expect(req.body.api_sig).to.have.length(32);
    done();
  });
});
