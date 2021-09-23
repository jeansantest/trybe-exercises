const readline = require('readline-sync');
const imcClass = require('./imcClass');
const round = require('./round');

const imc = (peso, altura) => {
  return (peso / altura ** 2) * 10000;
};

const imcLog = () => {
  const peso = readline.questionInt('Qual seu peso? ');
  const altura = readline.questionInt('Qual sua altura? ');
  console.log(
    `\nSeu imc é ${round(imc(peso, altura), 1)} kg/m²\n${imcClass(
      imc(peso, altura)
    )}`
  );
};

imcLog();

module.exports = imc;
