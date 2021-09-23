const readline = require('readline-sync');

const fibonacci = (termo) =>
  termo <= 2 ? termo - 1 : fibonacci(termo - 1) + fibonacci(termo - 2);

const fibonacciLog = () => {
  const numFibonacci = readline.questionInt('Termo para fibonacci: ');
  let termos = [];
  if (numFibonacci > 0) {
    for (let i = 1; i <= numFibonacci; i++) {
      termos.push(`Termo ${i}: ${fibonacci(i)}`);
    }
  } else {
    termos.push('Use um número acima de 0 para o fibonacci');
  }
  return termos;
};

fibonacciLog().forEach((e) => console.log(e));

module.exports = fibonacci;
