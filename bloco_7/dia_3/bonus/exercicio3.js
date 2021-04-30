// const assert = require('assert');
// const removeMiddle = (arr) => arr.filter();

// const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
// const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
// const expectedOutput = ['queen'];
// const output = removeMiddle(words);

// assert.deepStrictEqual(output, expectedOutput);
// assert.deepStrictEqual(words, expectedWords);

const assert = require('assert');

function division(x, y) {
  if (y === 0 || x !== 'number' || y!== 'number') {
    throw Error('parameter y must not be 0')
  }
  return x / y;
}
console.log(division(10,'a'))

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/);
assert.throws(() => { division(10, 'a'); }, /^Error: parameter y must not be a string$/);
assert.throws(() => { division(10, []); }, /^Error: parameter y must not be an array$/);; // OK