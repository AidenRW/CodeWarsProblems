const main = require('../main.js');
const assert = require('assert');

context('the add function', () => {
  it('should return FFFFFF when given 255,255,255', () => {
    assert.equal(main.rgb(255,255,255), 'FFFFFF');
  })

  it('should return 000000 when given 0,0,-20', () => {
    assert.equal(main.rgb(0,0,-20), '000000');
  })

  it('should return FFFFFF when given 300,255,255', () => {
    assert.equal(main.rgb(300,255,255), 'FFFFFF');
  })

  it('should return ADFF2F when given 173,255,47', () => {
    assert.equal(main.rgb(173,255,47), 'ADFF2F');
  })
})
