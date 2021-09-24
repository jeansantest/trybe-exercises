const readline = require('readline-sync');
const fs = require('fs').promises;

const readThisFile = async () => {
  try {
    const file = readline.question('Qual arquivo deseja ler? ');
    const read = await fs.readFile(file, 'utf8');
    console.log(read);
  } catch (err) {
    console.log(err.message);
  }
};

readThisFile();
