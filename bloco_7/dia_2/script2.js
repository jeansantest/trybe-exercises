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

//Exercício 5: Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//Exercício 6: Crie uma função que retorne o número total de estudantes em todas as aulas
const countStudents = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
console.log(countStudents());

//Exercício 7: Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueOfObjectPosition = (object, position) => Object.values(object)[position];
console.log(getValueOfObjectPosition(lesson1, 3));