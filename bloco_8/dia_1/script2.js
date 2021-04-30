const sorteio = () => Math.floor(Math.random() * 5)

const check = (number, callback) => number === callback() ? "Parabéns você ganhou" : "Tente novamente";

console.log(check(4, sorteio))