let notaEmPorcentagem = 100;

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

let a = 3;
let b = 3;
let c = 3;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  console.log(true)
} else {
  console.log(false)
}

let d = 2;
let e = 2;
let f = 3;

if (d % 2 == 1 || e % 2 == 1 || f % 2 == 1) {
  console.log(true)
} else {
  console.log(false)
}