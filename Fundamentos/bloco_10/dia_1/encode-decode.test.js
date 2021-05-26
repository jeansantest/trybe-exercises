function encode(string) {
  let newString = string.replace(/a/g, '1');
  newString = newString.replace(/e/g, '2');
  newString = newString.replace(/i/g, '3');
  newString = newString.replace(/o/g, '4');
  newString = newString.replace(/u/g, '5');
  return newString;
}

function decode(string) {
  let newString = string.replace(/1/g, 'a');
  newString = newString.replace(/2/g, 'e');
  newString = newString.replace(/3/g, 'i');
  newString = newString.replace(/4/g, 'o');
  newString = newString.replace(/5/g, 'u');
  return newString;
}

describe('Testa a função encode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  })
  it('encode é uma função', () => {
    expect(typeof encode).toBe('function')
  })
  it('vogal a é convertida para 1', () => {
    expect(encode('amar')).toBe('1m1r')
  })
  it('vogal e é convertida para 2', () => {
    expect(encode('ele')).toBe('2l2')
  })
  it('vogal i é convertida para 3', () => {
    expect(encode('ir')).toBe('3r')
  })
  it('vogal o é convertida para 4', () => {
    expect(encode('oloco')).toBe('4l4c4')
  })
  it('vogal u é convertida para 5', () => {
    expect(encode('ubuntu')).toBe('5b5nt5')
  })
  it('string que é retornada por encode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('amar').length).toBe(4)
  })
})

describe('Testa a função decode', () => {
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  })
  it('decode é uma função', () => {
    expect(typeof decode).toBe('function')
  })
  it('1 é convertida para a', () => {
    expect(decode('1m1r')).toBe('amar')
  })
  it('2 é convertida para e', () => {
    expect(decode('2l2')).toBe('ele')
  })
  it('3 é convertida para i', () => {
    expect(decode('3r')).toBe('ir')
  })
  it('4 é convertida para o', () => {
    expect(decode('4l4c4')).toBe('oloco')
  })
  it('5 é convertida para u', () => {
    expect(decode('5b5nt5')).toBe('ubuntu')
  })
  it('string que é retornada por decode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('1m1r').length).toBe(4)
  })
})