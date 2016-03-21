/**
 * Unit tests for Todo model.
 * Using Jasmine
 * 
 * @author        Adam Tait
 * @summary       Unit tests for todo.js
 * 
 * @requires      sequelize
 */



// NPM REQUIREMENTS
var Sequelize = require('sequelize');


// GLOBAL VARIABLES
var sequelize = new Sequelize(undefined, undefined, undefined, {
  'dialect': 'sqlite',
  'storage': __dirname + '/todo-model-spec.sqlite'
});

var Todo = sequelize.import('../models/todo.js');

const EMPTY_DESCRIPTION = '';
const SHORT_DESCRIPTION = 'A small, valid description';
const LONG_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetuer adipiscing'    +
      'elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ' +
      'penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ' +
      'quam felis, ultricies nec, pellentesque eu, pretium qe';



// THE TESTS
describe('Todo model', function () {

  beforeAll(function () {
    // Build the test db
    sequelize.sync({ force: true });
  });

  describe('description', function () {

    it('should not be null', function (done) {
      
      Todo
        .create({})
        .then(function () {
          done(new Error('Promise should not be resolved'));
          }, function (todoWithNullDescriptionError) {
            expect(todoWithNullDescriptionError.message).toBe("notNull Violation: description cannot be null");
            done();
        });
    });
    
    xit('should be of DataType STRING', function (done) {
      done();
    });
    
    xit('should be between 1 — 250 characters', function (done) {
      done();
    });

  });
});