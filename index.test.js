const assert = require('assert');
const http = require('http');

const port = process.env.PORT || 3000;

describe('HTTP server', () => {
  it('should respond with "Hello Node!"', (done) => {
    http.get(`http://localhost:${port}`, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Hello Node!\n');
        done();
      });
    });
  });
});
