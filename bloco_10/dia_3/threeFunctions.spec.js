// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const { it } = require('@jest/globals');
const threeFunctions = require('./threeFunctions');

describe('function uppercase', () => {
  it('toLowerCase', () => {
    threeFunctions.uppercase = jest.fn().mockImplementation((str) => str.toLowerCase());

    expect(threeFunctions.uppercase('OLA')).toBe('ola');
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