const testingScope = (escopo) => {
  let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
  let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
  ifScope = `${ifScope} ótimo, fui utilizada no escopo`;
  return escopo === true ? console.log(ifScope) : console.log(elseScope);
}

testingScope(true);