require('colors');
const { expect } = require('chai');
const httpMock = require('node-mocks-http');
const fs = require('fs');
const loadEnv = require('../middleware/loadEnv');
const saveToEnv = require('../../util/envStore');

let req = {};
let res = {};

describe('(>")>Env Middleware<("<)'.america, () => {
  beforeEach((done) => {
    req = httpMock.createRequest({
      method: 'GET',
      url: '/auth',
    });
    res = httpMock.createResponse();
    done();
  });

  afterEach((done) => {
    fs.writeFileSync('./env.js', '');
    done();
  });

  it('should load all environment variables contained in env.js', (done) => {
    const apiAccount = {
      api_key: 'hi',
      secret: 'there',
      sk: '!',
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
