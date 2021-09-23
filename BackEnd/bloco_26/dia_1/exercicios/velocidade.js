const readline = require('readline-sync');
const round = require('./round');

const velocidade = (distancia, tempo) => {
  return distancia / tempo;
};

const velocidadeLog = () => {
  const distancia = readline.questionInt(
    'Qual a distância percorrida? (metros) '
  );
  const tempo = readline.questionInt(
    'Qual foi o tempo para percorrer essa distância? (segundos) '
  );
  console.log(
    `\nSua velocidade média é de ${round(velocidade(distancia, tempo), 2)} m/s`
  );
};

velocidadeLog();

module.exports = velocidade;
