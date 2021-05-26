/*Estudando pelo gabarito*/
//Antes de tudo buscar padrões:
//A posição central é sempre o n + 1 e dividido por 2
//Então com o n = 5 seria 5 + 1 = 6 dividido por 2 = 3, ou seja 3 é minha posição central
let n = 6;
let symbol = '*';
let inputLine = '';
//A minha altura será baseada no centro
let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};