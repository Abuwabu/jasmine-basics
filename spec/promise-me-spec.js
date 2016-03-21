var promise = require('../promise.js');


describe('Promise Me...', function () {
  var returnedMsg;

  beforeEach(function (done) {
    promise(love).then(function (msg) {
      returnedMsg = msg;
      done();
    });
  });

  var love = 'Biscuits';
  
  it('loves biscuits', function (done) {
    expect(returnedMsg).toBe("Yeah! Biscuits... Now that's what I call love");
    done();
  });
});