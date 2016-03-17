var request = require('request');
var localUrl = 'http://localhost:3000/';

var helloWorld = require('../server.js');



describe('Hello World Server', function () {

  describe('GET /', function () {
    it('returns status code 200', function (done) {
      request.get(localUrl, function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('returns Hello World', function(done){
      request.get(localUrl, function(error, response, body){
        expect(body).toBe('Hello World');
//        helloWorld.closeServer();
        done();
      });
    });
  });
});