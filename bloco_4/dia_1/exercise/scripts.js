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

let peça = "RooK";

switch (peça.toLowerCase()) {
  case "bishop":
    console.log("moves any number of vacant squares diagonally in a straight line");
    break;

  case "rook":
    console.log("moves any number of vacant squares forwards, backwards, left, or right in a straight line");
    break;
    
  case "queen":
    console.log("moves any number of vacant squares in any direction");
    break;

  case "king":
    console.log("moves exactly one vacant square in any direction");
    break; 
    
  case "knight":
    console.log("moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner");
    break;

  case "pawn":
    console.log("moves forward exactly one square, or optionally, two squares when on its starting square");
    break;
    
  default:
    console.log("Ocorreu algum erro")  
}
