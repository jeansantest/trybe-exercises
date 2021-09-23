const readline = require('readline-sync');

const queries = ['imc', 'velocidade', 'sorteio', 'fatorial', 'fibonacci'];
const index = readline.keyInSelect(queries, 'Which query?');

if (index >= 0) require(`./${queries[index]}`);
