const readline = require('readline-sync');

const fatorial = (num) => (num <= 1 ? 1 : fatorial(num - 1) * num);

const fatorialLog = () => {
  const numFatorial = readline.questionInt('Número para fazer fatorial: ');
  if (numFatorial > 0) {
    console.log(
      `O resultado do fatorial de ${numFatorial} é ${fatorial(numFatorial)}`
    );
  } else {
    console.log('Use um número acima de 0 para o fatorial');
  }
};

module.exports = fatorialLog;
