module.exports = function (love) {
  return new Promise(function (resolve, reject) {

    if (typeof love !== 'string' || typeof love !== 'string') {
      return reject("Nope! Not feeling the love");
    }

    resolve("Yeah! " + love + "... Now that's what I call love");
  });
}