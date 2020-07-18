require('colors');
const { expect } = require('chai');
const httpMock = require('node-mocks-http');
const stringify = require('../middleware/stringify');

let req = {};
let res = {};

describe('(>")>Stringify Middleware<("<)'.rainbow, () => {
  beforeEach((done) => {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/scrobbles/q?artist=TRUONGS&title=NUOCNAM',
    });
    req.body.artist = 'TRUONGS';
    req.body.track = 'NUOCNAM';
    res = httpMock.createResponse();
    stringify()(req, res, () => {});
    done();
  });

  it('should stringify all keys and values in the request body', (done) => {
    expect(req.body.dataString).to.equal('artist=TRUONGS&track=NUOCNAM');
    done();
  });
});
