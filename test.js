const assert = require('assert');
Object.freeze(assert);
const { sumOfOther } = require('./src/index.js');

describe('sumOfOther', () => {
  describe('simple test with simple array', () => {
    it('should return array', () => {
      const sum = sumOfOther([1, 0, 1, 0]);
      assert.deepStrictEqual(sum, [1, 2, 1, 2]);
    });

    it('should return empty array', () => {
      const sum = sumOfOther([]);
      assert.deepStrictEqual(sum, []);
    });

    it('should return array of negative numbers', () => {
      const sum = sumOfOther([-1, -2, -3, -4, -5, -6]);
      assert.deepStrictEqual(sum, [-20, -19, -18, -17, -16, -15]);
    });
  });
});
