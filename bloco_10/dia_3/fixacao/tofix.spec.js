// const { expect } = require('@jest/globals');
const { it } = require('@jest/globals');
const tofix = require('./tofix');
jest.mock("./tofix");

describe('função subtrair', () => {
  it('toHaveBeenCalled', () => {
    tofix.subtrair = jest.fn();
    tofix.subtrair();
    expect(tofix.subtrair).toHaveBeenCalled();
  })

  it('restaurar implentação original', () => {
    // criando o mock e substituindo a implementação para uma adição
    const mockSubtrair = jest
      .spyOn(tofix, "subtrair")
      .mockImplementation((a, b) => a + b)
      .mockReturnValue(20);

    tofix.subtrair(5, 1);
    expect(mockSubtrair).toHaveBeenCalledTimes(2);
    expect(mockSubtrair(5, 1)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalledTimes(3);
    expect(mockSubtrair).toHaveBeenLastCalledWith(5, 1);

    // resetando o mock
    tofix.subtrair.mockRestore();
    expect(tofix.subtrair(1, 2)).toBe(undefined);
    expect(tofix.subtrair).toHaveBeenCalledTimes(1);
    expect(tofix.subtrair).toHaveBeenLastCalledWith(1, 2);
  })
})

describe('função multiplicar', () => {
  it('toHaveBeenCalled 10', () => {
    tofix.multiplicar = jest.fn()
      .mockReturnValue(10);
    tofix.multiplicar();
    expect(tofix.multiplicar).toHaveBeenCalled();
    expect(tofix.multiplicar()).toBe(10);
  })
})

describe('função somar', () => {
  it('soma da 3', () => {
    tofix.somar.mockImplementation((a, b) => a + b);
    tofix.somar(1, 2);

    expect(tofix.somar).toHaveBeenCalled();
    expect(tofix.somar).toHaveBeenCalledTimes(1);
    expect(tofix.somar).toHaveBeenCalledWith(1, 2);
    expect(tofix.somar(1, 2)).toBe(3);
  })
})

describe('função divisão', () => {
  it('divisões', () => {
    tofix.dividir = jest.fn()
      .mockReturnValue(15)
    tofix.dividir()
    expect(tofix.dividir).toHaveBeenCalled();
    expect(tofix.dividir).toHaveBeenCalledTimes(1);
    expect(tofix.dividir(2, 5)).toBe(15);
    expect(tofix.dividir).toHaveBeenLastCalledWith(2, 5);
  })
})
