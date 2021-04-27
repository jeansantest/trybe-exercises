const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//Exercício 1: Crie uma função para adicionar o turno da manhã na lesson2
const addMorningShift = (object, key, value) => object[key] = value;
addMorningShift(lesson2, 'turno', 'manhã');
console.log(lesson2);

//Exercício 2: Crie uma função para listar as keys de um objeto.
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson2))

//Exercício 3: Crie uma função para mostrar o tamanho de um objeto.
const objectLength = (object) => Object.entries(object).length;
console.log(objectLength(lesson2))

//Exercício 4: Crie uma função para listar os valores de um objeto.
const objectValues = (object) => Object.values(object);
console.log(objectValues(lesson2))