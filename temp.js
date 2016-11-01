require('dotenv').config();

const assert = require('assert');
const app = require('../app');

const req = {
  url: '/api/v1/group/1243245/1243242423',
  headers: {'x-messaging-group-api-key': process.env.API_KEY},
  method: 'get'
}

const res = {
  headers: [],
  setHeader: function(header) {
    this.headers.push(header);
  },
  json: function(data) {
    this.json = data;
    return this;
  },
  send: function(data) {
    this.body = data;
    return this;
  },
  status: function(code) {
    this.status = code;
    return this;
  }
}

app.handle(req, res, function() {
  console.log("DSFDS");
  console.log("HALLO", req, res);
});
