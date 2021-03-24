let a = 29;
let b = 20;
let c = 25;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

if (a > b) {
  console.log(a)
} else {
  console.log(b)
}

if (a > b && a > c) {
  console.log(a)
} else if (b > a && b > c) {
  console.log(b)
} else {
  console.log(c)
}

let tri1 = 60;
let tri2 = 60;
let tri3 = 60;

if (tri1 + tri2 + tri3 == 180) {
  console.log(true)
} else if (tri1 + tri2 + tri3 < 0) {
  console.log("Algo deu errado")
} else {
  console.log(false)
}


