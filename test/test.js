var request = require('supertest');
var app = require('../index.js');   
describe('GET /will', function() {
  it('respond with Hello World from Node.js on Kubernetes!', function(done) {
    request(app).get('/will').expect('{"response": "Hello World" }', done);
  });
});