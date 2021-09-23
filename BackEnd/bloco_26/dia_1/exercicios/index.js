const readline = require('readline-sync');
const imc = require('./imc');
const imcClass = require('./imcClass');
const velocidade = require('./velocidade');
const round = require('./round');

const queries = ['imc', 'velocidade'];
const index = readline.keyInSelect(queries, 'Which query?');

if (queries[index] === 'imc') {
  const peso = readline.questionInt('Qual seu peso? ');
  const altura = readline.questionInt('Qual sua altura? ');
  console.log(
    `\nSeu imc é ${round(imc(peso, altura), 1)} kg/m²\n${imcClass(
      imc(peso, altura)
    )}`
  );
}
if ((queries[index] = 'velocidade')) {
  const distancia = readline.questionInt(
    'Qual a distância percorrida? (metros) '
  );
  const tempo = readline.questionInt(
    'Qual foi o tempo para percorrer essa distância? (segundos) '
  );
  console.log(
    `\nSua velocidade média é de ${round(velocidade(distancia, tempo), 2)} m/s`
  );
}
