const testingScope = (escopo) => {
  let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
  let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
  ifScope = `${ifScope} ótimo, fui utilizada no escopo`;
  return escopo === true ? console.log(ifScope) : console.log(elseScope);
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const arrSorted = oddsAndEvens.sort((a,b) => a - b).join(',');

console.log(`Os números ${arrSorted} se encontram ordenados de forma crescente!`);

const factorial = n => n < 2 ? 1 : factorial(n-1) * n;
console.log(factorial(5))

const longestWord = s => s.split(' ').sort((a,b)=>a.length > b.length ? -1 : a.length < b.length ? 1 : 0).slice(0,1).join('');
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))