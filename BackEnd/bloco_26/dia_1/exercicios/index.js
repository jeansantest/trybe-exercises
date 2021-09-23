const readline = require('readline-sync');

const queries = ['imc', 'velocidade', 'sorteio', 'fatorial', 'fibonacci'];
const index = readline.keyInSelect(queries, 'Which query?');

require(`./${queries[index]}`);
