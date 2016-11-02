const assert = require('assert');
const app = require('./test/app');

const req = {
  url: '/foo/bar',
  method: 'get',
  headers: {}
}

const res = {
  headers: [],
  setHeader: function(header) {
    this.headers.push(header);
  },
  json: function(data) {
    this.json = data;
  },
  send: function(data) {
    this.body = data;
  },
  status: function(code) {
    this.status = code;
    return this;
  },
  end: function() {
    console.log('end');
  }
}
