const imc = require('./imc');
const imcClass = require('./imcClass');
const round = require('./round');
const readline = require('readline-sync');

const peso = readline.questionInt('Qual seu peso? ');
const altura = readline.questionInt('Qual sua altura? ');

if (!peso || !altura) {
  console.log('Falta informações');
} else {
  console.log(
    `\nSeu imc é ${round(imc(peso, altura), 1)} kg/m²\n${imcClass(
      imc(peso, altura)
    )}`
  );
}
