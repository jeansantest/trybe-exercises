let notaEmPorcentagem = -2;

if (notaEmPorcentagem > 100 || notaEmPorcentagem < 0) {
  console.log("Ocorreu algum erro")
} else if (notaEmPorcentagem >= 90) {
  console.log("A")
} else if (notaEmPorcentagem >= 80) {
  console.log("B")
} else if (notaEmPorcentagem >= 70) {
  console.log("C")
} else if (notaEmPorcentagem >= 60) {
  console.log("D")
} else if (notaEmPorcentagem >= 50) {
  console.log("E")
} else if (notaEmPorcentagem < 50) {
  console.log("F")
}