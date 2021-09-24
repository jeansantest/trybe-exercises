const readline = require('readline-sync');
const fs = require('fs').promises;

const replaceTextInFile = async () => {
  try {
    const file = readline.question('Qual arquivo deseja ler? ');
    const read = await fs.readFile(file, 'utf8');
    console.log(read);
    const word = readline.question('Qual palavra deseja modificar? ');
    const write = readline.question('O que deseja colocar no lugar? ');
    const replace = read.replace(new RegExp(word, 'g'), write);
    console.log(replace);
    const newFile = readline.question('Nome do arquivo de destino: ');
    fs.writeFile(`./${newFile}`, replace)
      .then(() => console.log('Novo arquivo salvo'))
      .catch((err) => console.log(err.message));
  } catch (err) {
    console.log(err.message);
  }
};

replaceTextInFile();
