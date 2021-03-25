let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}
let soma = numbers.reduce((soma, currentElement) => soma + currentElement)
let media = numbers.reduce((soma, currentElement) => soma + currentElement) / numbers.length
console.log('A soma dos arrays é de', soma)
console.log('A média dos arrays é de', media)

if (media > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}

let higherNumber = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] > higherNumber) {
    higherNumber = numbers[i]
  }
}
console.log(higherNumber)



/*Utilizado para resolver o exercício 2:
https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer/#:~:text=reduce(),os%20valores%20de%20um%20Array.
exercício 3:
https://www.visualdicas.com.br/programacao/js/68-como-calcular-a-soma-e-a-media-dos-itens-de-um-array-javascript
exercício 5:
https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array*/

