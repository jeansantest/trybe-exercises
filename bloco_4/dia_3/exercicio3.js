let n = 5;

for(let index = 1; index <= n; index++) {
  let linhaDeAsteriscos = '';
for(let linha = 1; linha <= n; linha++) {
  if (index > (n - linha)) {
    linhaDeAsteriscos += '*'
  } else {
    linhaDeAsteriscos += ' '
  }
}
console.log(linhaDeAsteriscos)
}