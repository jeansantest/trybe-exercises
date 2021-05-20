const getAnimalByAge = require('./exercise6.2')

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade', () => {
    test('Se dois tiverem a mesma idade', () => {
      expect.assertions(1);
      const animals = [{ name: 'Dorminhoco', age: 2, type: 'Dog' },
      { name: 'Soneca', age: 2, type: 'Dog' }];
      return expect(getAnimalByAge(2)).resolves.toEqual(animals);
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(3)).rejects.toBe('Nenhum animal encontrado');
    });
  });
});