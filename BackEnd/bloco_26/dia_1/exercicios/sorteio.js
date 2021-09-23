const readline = require('readline-sync');

const sorteio = (num) => {
  const numSorted = Math.floor(Math.random() * 10);
  if (numSorted === num) {
    return 'Parabéns, número correto!';
  } else {
    return `Opa, não foi dessa vez. O número era ${numSorted}`;
  }
};

const sorteioLog = () => {
  const num = readline.questionInt('Qual seu número para o sorteio? (1 a 10) ');
  console.log(sorteio(num));
};

sorteioLog();

module.exports = sorteio;
