const app = require('./app');
const testexpress = require('../index');

const req = testexpress.makeRequestObject({
  url: '/foo/bar',
  method: 'get'
});

testexpress.testRequestObject(app, req).then(console.log).catch(console.err);
