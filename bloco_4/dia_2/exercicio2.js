let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;
for(let index = 0; index < numbers.length; index += 1) {
  
  if(numbers[index] % 2 === 1) {
    impares += 1
  }
}
if (impares > 0) {
console.log('São', impares , 'valores ímpares')
} else {
  console.log('nenhum valor ímpar encontrado')
}

let lowerNumber = 1000;
for (let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] < lowerNumber) {
    lowerNumber = numbers[i]
  }
}
console.log(lowerNumber)