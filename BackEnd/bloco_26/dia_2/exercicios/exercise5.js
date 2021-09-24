const fs = require('fs').promises;

const nameFile = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
// nameFile.forEach((e, i) =>
//   fs
//     .writeFile(`./file${i + 1}.txt`, e)
//     .then(() => console.log('Escrito com sucesso'))
//     .catch((err) => console.log(err.message))
// );
const createFileAll = async () => {
  const fileContents = await Promise.all(
    nameFile.map((_, i) => fs.readFile(`./file${i + 1}.txt`, 'utf-8'))
  );

  const fileAll = fileContents.join(' ');
  await fs.writeFile('./fileAll.txt', fileAll);
};

createFileAll();
