const Animals = [
  { name: 'Dorminhoco', age: 2, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.filter((animal) => animal.age === age);
      if (animal.length !== 0) {
        return resolve(animal);
      };
      const messageError = 'Nenhum animal encontrado';
      return reject(messageError);
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then(animal => animal);
};

module.exports = getAnimalByAge;