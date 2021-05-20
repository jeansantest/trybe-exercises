function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

let arr = [1, 2, 3, 4];

test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});
test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});
test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
  expect(myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4]);
});
test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});