// const programLogic = (initial, limit) => {
//   const final = [initial];
//   for (let index = 0; index < 100; index++) {
//     if (final[index] > limit) {
//       return final;
//     }

//     if (index % 2 === 1) {
//       final.push(final[index] + final[index - 1]);
//     } else {
//       final.push(final[index] / 2);
//     }
//   }
// };
// console.log(programLogic(8, 100));

// const functionTest = (x, y, a) => {
//   while (x > 1) {
//     y = x + a;
//     x = x / 2;
//     a = a + x + y;
//     console.log(a);
//     console.log(x);
//   }
//   return a;
// };
// console.log(functionTest(8, 0, 5));
// let x = 8;
// let y = 0;
// let a = 5;

// const algorithm = (limit) => {
//   let final = [];
//   for (let index = 0; index < limit; index++) {
//     if (!final.length || index % 2 === 0) {
//       final.push('010101');
//     } else {
//       final.push('101010');
//     }
//   }

//   return final.join('\n');
// };
// console.log(algorithm(4));

// const combination = (salgados, sucos, doces) => {
//   let combinations = [];
//   for (let i = 1; i <= salgados; i++) {
//     for (let j = 1; j <= sucos; j++) {
//       for (let k = 1; k <= doces; k++) {
//         combinations.push({ salgado: i, suco: j, doce: k });
//       }
//     }
//   }
//   return combinations;
// };

// console.log(combination(10, 12, 7));

// Feito com Javascript
// Quando o tamagotchi é comprado diminui em 1 real, e seu limite de preço é 1 real
// Enquanto o dinheiro for maior ou igual a 0 ele vai contar mais 1
// Enquanto o preço for maior que 1 e a compra for efetuada ele diminui em 1
const tamagotchi = (myMoney) => {
  let count = 0;
  let price = 12;
  while (myMoney > 0) {
    myMoney -= price;
    if (myMoney >= 0) {
      count += 1;
    }
    if (price > 1) {
      price -= 1;
    }
  }
  return count;
};
console.log(tamagotchi(20));
