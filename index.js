/**
 * Things to test for.
 *
 * req: url, method, query, data, headers
 * res: status code, response type, data
 */

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
      url: options.url || '/',
      method: options.url || 'get',
      headers: options.headers || {},
      body: options.body || {}
    }
  },
}
