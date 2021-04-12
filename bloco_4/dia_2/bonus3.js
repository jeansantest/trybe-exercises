numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers = [];

for(let i = 0; i < numbers.length - 1; i++) {
  multipliedNumbers.push(numbers[i] * numbers[i + 1]);
}

let lastNumber = numbers[numbers.length - 1] * 2
multipliedNumbers.push(lastNumber)

console.log(multipliedNumbers)

