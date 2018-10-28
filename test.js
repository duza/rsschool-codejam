const assert = require('assert');
Object.freeze(assert);
const { sumOfOther } = require('./src/index.js');

describe('sumOfOther', () => {
  describe('simple test with simple array', () => {
    const sum = sumOfOther([1, 0, 1, 0]);
    it('should return array', function() {
      assert.deepStrictEqual(sum, [1, 2, 1, 2]);
    })
  })
});
