const random = require('./random');

// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

describe('função randomTo100', () => {
  it('retorno padrão 10', () => {
    random.randomTo100 = jest.fn().mockReturnValue(10);

    expect(random.randomTo100).toHaveBeenCalledTimes(0);
    expect(random.randomTo100()).toBe(10);
    expect(random.randomTo100).toHaveBeenCalled();
    expect(random.randomTo100).toHaveBeenCalledTimes(1);
  })

  it('mockImplementation', () => {
    random.randomTo100 = jest.fn().mockImplementation((a, b) => a / b);

    expect(random.randomTo100(4, 2)).toBe(2);
    expect(random.randomTo100).toHaveBeenCalled();
    expect(random.randomTo100).toHaveBeenCalledTimes(1);
    expect(random.randomTo100).toHaveBeenCalledWith(4, 2)
  })

  it('restore', () => {
    random.randomTo100 = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(random.randomTo100(4, 2, 1)).toBe(8);
    expect(random.randomTo100).toHaveBeenCalled();
    expect(random.randomTo100).toHaveBeenCalledTimes(1);
    expect(random.randomTo100).toHaveBeenCalledWith(4, 2, 1);

    random.randomTo100.mockRestore();
    random.randomTo100 = jest.fn().mockImplementation((a) => a * 2);
    expect(random.randomTo100(4)).toBe(8);
    expect(random.randomTo100).toHaveBeenCalled();
    expect(random.randomTo100).toHaveBeenCalledTimes(1);
    expect(random.randomTo100).toHaveBeenCalledWith(4);
  })
})