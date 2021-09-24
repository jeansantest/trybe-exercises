const fs = require('fs').promises;

const simpsons = () => {
  return new Promise((resolve, reject) =>
    fs
      .readFile('simpsons.json', 'utf8')
      .then((data) => resolve(JSON.parse(data)))
      .catch((err) => {
        reject(new Error(err));
        process.exit(1);
      })
  );
};

// Exercicio 4.1
// simpsons().then((data) =>
//   data.forEach((e) => console.log(`${e.id} - ${e.name}`))
// );

// Exercicio 4.2
const getSimpsonsById = (id) => {
  return new Promise((resolve, reject) => {
    simpsons()
      .then((data) => {
        console.log(data);
        data.forEach(
          (e) => parseInt(e.id) === id && resolve(`${e.id} - ${e.name}`)
        );
        reject(new Error('id não encontrado'));
      })
      .catch((err) => {
        reject(new Error(err));
        process.exit(1);
      });
  });
};

// getSimpsonsById(19).then((res) => console.log(res));

// Exercicio 4.3
const removeSimpsonsById = (...ids) =>
  simpsons().then((data) => {
    const idArray = ids.map(String);
    return data.filter((e) => e.id !== idArray[0] && e.id !== idArray[1]);
  });

// removeSimpsonsById(10, 6).then((res) =>
//   fs
//     .writeFile('./simpsons.json', JSON.stringify(res))
//     .then(() => console.log('Escrito com sucesso'))
//     .catch((err) => console.log(err.message))
// );

// Exercicio 4.4
// simpsons().then((data) =>
//   fs
//     .writeFile(
//       './simpsonsFamily.json',
//       JSON.stringify(data.filter((e) => Number(e.id) <= 4))
//     )
//     .then(() => console.log('Escrito com sucesso'))
//     .catch((err) => console.log(err.message))
// );

// Exercicio 4.5
const simpsonsFamily = () => {
  return new Promise((resolve, reject) =>
    fs
      .readFile('simpsonsFamily.json', 'utf8')
      .then((data) => resolve(JSON.parse(data)))
      .catch((err) => {
        reject(new Error(err));
        process.exit(1);
      })
  );
};

// simpsonsFamily().then((data) => {
//   fs.writeFile(
//     './simpsonsFamily.json',
//     JSON.stringify([...data, { id: '5', name: 'Nelson Muntz' }])
//   )
//     .then(() => console.log('Escrito com sucesso'))
//     .catch((err) => console.log(err.message));
// });

// Exercicio 4.6
simpsonsFamily().then((data) =>
  fs
    .writeFile(
      './simpsonsFamily.json',
      JSON.stringify(
        data.map(({ id, name }) =>
          name === 'Nelson Muntz'
            ? { id, name: 'Maggie Simpson' }
            : { id, name }
        )
      )
    )
    .then(() => console.log('Escrito com sucesso'))
    .catch((err) => console.log(err.message))
);
