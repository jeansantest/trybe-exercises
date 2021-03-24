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

let salarioBruto;
let aliquota8;
let aliquota9;
let aliquota11;
let aliquotaMax;