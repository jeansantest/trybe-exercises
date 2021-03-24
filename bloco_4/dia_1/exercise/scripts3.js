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

let salarioBruto = 6000;
let aliquota8 = salarioBruto * (8 / 100);
let aliquota9 = salarioBruto * (9 / 100);
let aliquota11 = salarioBruto * 11 / 100;
let aliquotaMax = 570.88;
let resultado8 = salarioBruto - aliquota8;
let resultado9 = salarioBruto - aliquota9;
let resultado11 = salarioBruto - aliquota11;
let resultadoMax = salarioBruto - aliquotaMax;

if (salarioBruto < 0) {
  console.log('Algo deu errado')
} else if (salarioBruto <= 1556.94) {
  console.log(resultado8)
  salarioBruto - aliquota8;
} else if (salarioBruto <= 2594.92) {
  console.log(resultado9)
  salarioBruto - aliquota9;
} else if (salarioBruto <= 5189.82) {
  console.log(resultado11)
  salarioBruto - aliquota11;
} else {
  console.log(resultadoMax)
  salarioBruto - aliquotaMax;
}

if (resultado8 <= 1903.98) {
  console.log(resultado8)
} else if (resultado9 <= 1903.98) {
  console.log(resultado9)
} else if (resultado9 <= 2826.65) {
  console.log(resultado9 * 7.5 / 100 - 142.80)
} else if (resultado9 <= 3751.05) {
  console.log(resultado9 * 15 / 100 - 354.80)
} else if (resultado11 <= 3751.05) {
  console.log(resultado11 * 15 / 100 - 354.80)
} else if (resultado11 <= 4664.68) {
  console.log(resultado11 * 22.5 / 100 - 636.13)
} else if (resultadoMax <= 4664.68) {
  console.log(resultadoMax * 22.5 / 100 - 636.13)
} else if (resultado11 > 4664.68) {
  console.log(resultadoMax * 27.5 / 100 - 869.36)
} else if (resultadoMax > 4664.68) {
  console.log(resultadoMax * 27.5 / 100 - 869.36)
}
