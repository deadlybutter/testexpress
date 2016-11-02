/**
 * Create a response object that calls the given done function.
 * @param  {Function} done function to call when response it sent.
 * @return {object}        response object
 */
function makeResponseObject(done) {
  return {
    done: done,
    headers: [],
    setHeader: function(header) {
      this.headers.push(header);
    },
    json: function(data) {
      this.json = data;
      this.done(this);
    },
    send: function(data) {
      this.body = data;
      this.done(this);
    },
    status: function(code) {
      this.status = code;
      return this;
    },
    end: function() {
      this.done(this);
    }
  }
}

module.exports = {
  /**
   * Create a base request object for Express to interpret.
   * @param  {object} properties Object containing all of the properties to set.
   *                             {required|string} url     - Url to hit. eg: /api/v1/get
   *                             {required|string} method  - GET, POST, etc
   *                             {optional|object} headers - Headers to send. eg: {'x-api-key': '123abc'}
   *                             {optional|data}   body    - Data to send.
   * @return {object}
   */
  makeRequestObject: function(properties) {
    return {
      url: properties.url || '/',
      method: properties.method || 'get',
      headers: properties.headers || {},
      body: properties.body || {}
    }
  },

  /**
   * Test the given request object again
   * @param  {object} app Express app.
   * @param  {[type]} req Request object constructed with makeRequestObject().
   * @return {Promise}
   */
  testRequestObject: function(app, req) {
    return new Promise(function(resolve, reject) {
      app.handle(req, makeResponseObject(resolve), reject);
    });
  }
}
