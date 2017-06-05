process.env.NODE_ENV = 'test'
var User = require('../src/User');
var assert = require('assert');
var mongoose = require('mongoose');

describe('User', function() {

  beforeAll(funciton(done) {
    User.remove({}, function(err) {
      var testUser = new User();
      testUser.email = 's@gmail.com';
      testUser.password = '123login';
      testUser.save(function(err) {
        done();
      })
    })
  })
})
