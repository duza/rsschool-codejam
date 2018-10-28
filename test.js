const assert = require('assert');
const { sumOfOther, make, recursion } = require('./src/index.js');


Object.freeze(assert);
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

describe('make', () => {
  it('test sum function', () => {
    const sum = (a, b) => a + b;
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.strictEqual(result, 777);
  });

  it('test diff function', () => {
    const diff = (a, b) => a - b;
    const result = make(1, 2, 3, 4)(5)(-7)(diff);
    assert.strictEqual(result, -6);
  });

  it('test multiplication function', () => {
    const multiply = (a, b) => a * b;
    const result = make(1, 1, 1, 1, 1, 1)(-1)(3, 0)(multiply);
    assert.strictEqual(result, 0);
  });
});

describe('recursion', () => {
  it('test the tree from task', () => {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
    const array = recursion(tree);
    assert.deepStrictEqual(array, [[100], [90, 120], [70,99,110,130]]);
  });

  it('test uneven tree', () => {
    const tree = { value: 1, left: { value: 2 }, right: { value: 3, left: { value: 4 }, right: { value: 5, left: { value: 6 }, right: { value: 7, right: { value: 8 }}}}};
    const array = recursion(tree);
    assert.deepStrictEqual(array, [[1], [2, 3], [4, 5], [6, 7], [8]]);
  });

  it('test empty tree', () => {
    const tree = {};
    const array = recursion(tree);
    assert.deepStrictEqual(array, []);
  });

  it('test a tree with only vertex', () => {
    const tree = { value: 42 };
    const array = recursion(tree);
    assert.deepStrictEqual(array, [[42]]);
  });

  it('test simple little tree', () => {
    const tree = { value: 'a', right: { value: 'c' }, left: { value: 'b' }};
    const array = recursion(tree);
    assert.deepStrictEqual(array, [['a'], ['b', 'c']]);
  });
});
