const main = require('../main.js');
const assert = require('assert');

context('should work with letters', () => {
  it('should return an array of unique charaters', () => {
    assert.deepEqual(main.uniqueInOrder("AAAABBBCCDAABBB"), ['A','B','C','D','A','B']);
  });
});
context('should work with lower and upper case letters', () => {
  it('should return an array of unique charaters', () => {
    assert.deepEqual(main.uniqueInOrder("AAAABBBCcAADDD"), ['A','B','C','c','A','D']);
  });
});

context('should work with an array of numbers', () => {
  it('should return an array of unique charaters', () => {
    assert.deepEqual(main.uniqueInOrder([1,2,2,3,3]), [1,2,3]);
  });
});
