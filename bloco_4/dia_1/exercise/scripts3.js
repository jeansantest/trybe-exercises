let valorCusto = 100;
let impostoSobreOCusto = valorCusto * 20 / 100;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let valorVenda = 121;
let lucro = valorVenda - valorCustoTotal;

if (lucro >= 0) {
  console.log(lucro * 1000)
} else if (lucro < 0) {
  console.log('Não tem lucro, algo deu errado')
}

let salarioBruto = 4000;
let aliquota8 = 8 / 100;
let aliquota9 = 9 / 100;
let aliquota11 = 11 / 100;
let aliquotaMax = 570.88;

let INSS;
let IR; 

if (salarioBruto < 0) {
  console.log('Algo deu errado')
} else if (salarioBruto <= 1556.94) {
  INSS = salarioBruto * aliquota8;
} else if (salarioBruto <= 2594.92) {
  INSS = salarioBruto * aliquota9;
} else if (salarioBruto <= 5189.82) {
  INSS = salarioBruto * aliquota11;
} else {
  INSS = salarioBruto * aliquotaMax;
}

let salarioBase = salarioBruto - INSS

if (salarioBase <= 1903.98) {
  IR = 0;
} else if (salarioBase <= 2826.65) {
  IR = salarioBase * 7.5 / 100 - 142.80
} else if (salarioBase <= 3751.05) {
  IR = salarioBase * 15 / 100 - 354.80
} else if (salarioBase <= 4664.68) {
  IR = salarioBase * 22.5 / 100 - 636.13
} else if (salarioBase > 4664.68) {
  IR = salarioBase * 27.5 / 100 - 869.36
}

let salarioLiquido = salarioBase - IR;

console.log(salarioLiquido)

/*Pra conseguir dar uma organizada melhor no meu código dei uma estudada no repositório do Matheus Inacio:
https://github.com/heyset/Trybe/pull/7 */
