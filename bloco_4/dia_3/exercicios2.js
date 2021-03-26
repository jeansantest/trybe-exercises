let n = 5;

for(let index = 0; index < n; index++) {
  let linhaDeAsteriscos = '';
for(let linha = 0; linha < index + 1; linha++) {
  linhaDeAsteriscos += '*';
}
console.log(linhaDeAsteriscos)
}