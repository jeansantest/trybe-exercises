// const { expect } = require('@jest/globals');
const tofix = require('./tofix');

describe('função subtrair', () => {
  it('toHaveBeenCalled', () => {
    tofix.subtrair = jest.fn();
    tofix.subtrair();
    expect(tofix.subtrair).toHaveBeenCalled();
  })
})