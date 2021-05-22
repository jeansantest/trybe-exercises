// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const threeFunctions = require('./threeFunctions');

describe('function uppercase', () => {
  it('toLowerCase', () => {
    const uppercaseSpied = jest.spyOn(threeFunctions, 'uppercase').mockImplementation((str) => str.toLowerCase())

    expect(uppercaseSpied('OLA')).toBe('ola');

    threeFunctions.uppercase.mockRestore();

    expect(threeFunctions.uppercase('ola')).toBe('OLA');
  })
})

describe('function firstLetter', () => {
  it('lastLetter', () => {
    threeFunctions.firstLetter = jest.fn().mockImplementation((str) => {
      let arr = str.split('');
      return arr[arr.length-1]
    });

    expect(threeFunctions.firstLetter('ola')).toBe('a');
  })
})

describe('function concatStrings', () => {
  it('three string', () => {
    threeFunctions.concatStrings = jest.fn().mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);

    expect(threeFunctions.concatStrings('fala', 'tribo', 'beleza')).toBe('fala tribo beleza');
  })
})