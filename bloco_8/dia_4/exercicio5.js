//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let counter = 0;
  names.join('').toLowerCase().split('').reduce((acc, value) => value === 'a' ? counter += 1 : false, 0)
  return counter
}
console.log(containsA())

assert.deepStrictEqual(containsA(), 20);