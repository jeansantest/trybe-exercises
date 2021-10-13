const initial = 8;
let final = [];
for (let index = 0; index < final.length + 1; index++) {
  if (final[index] !== 100) {
    final.push(initial + 2);
  }
}

console.log(final);
