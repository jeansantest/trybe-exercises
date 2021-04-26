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

const longestWord = s => s.split(' ').sort((a,b)=>a.length < b.length ? 1 : -1).slice(0,1).join('');
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

const button = document.querySelector('button');
const span = document.querySelector('span');
let counter = 0

button.addEventListener('click', () => {counter += 1; span.innerHTML = counter})

const trybeString = x => `Tryber ${x} aqui!`
console.log(trybeString('Jean'))

const skills = ['JavaScript', 'HTML', 'CSS', 'Xablau', 'Valorant'];

const trybeSkills = x => `${x} minhas cinco principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}
${skills[3]}
${skills[4]}!`
console.log(trybeSkills(trybeString('Jean')))
