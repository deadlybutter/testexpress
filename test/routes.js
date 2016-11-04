const app = require('./app');
const testexpress = require('../index');

testexpress.request(app, {
  url: '/foo/bar',
  method: 'get'
})
.then(console.log).catch(console.err);
