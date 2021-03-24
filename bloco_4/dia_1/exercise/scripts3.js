let valorCustoTotal = 100 + 100 * 20 / 100;
let valorVenda = 121;
let lucro = valorVenda - valorCustoTotal;

if (lucro >= 0) {
  console.log(lucro * 1000)
} else if (lucro < 0) {
  console.log('Não tem lucro, algo deu errado')
}

