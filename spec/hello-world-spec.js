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

    it('returns Hello World!', function (done) {
      request.get(localUrl, function (error, response, body) {
        expect(body).toBe('Hello World!');
        done();
      });
    });
  });

  describe('GET /about', function () {

    it('returns status code 200', function (done) {
      var aboutUrl = localUrl + 'about';

      request.get(aboutUrl, function (error, response, body) {
        if (error) {
          console.log(error);
          // Probably assert a failure here.
        }
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    
    it('returns About Us', function (done) {
      var aboutUrl = localUrl + 'about';
      
      request.get(aboutUrl, function (error, response, body) {
        expect(body).toBe('About Us');
        helloWorld.closeServer();
        done();
      });
    });
      
    });
  });