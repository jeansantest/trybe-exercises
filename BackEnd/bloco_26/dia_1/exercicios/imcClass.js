const imcClass = (imc) => {
  if (imc < 18.5) return 'Abaixo do peso (magreza)';
  if (imc < 24.9) return 'Peso normal';
  if (imc < 29.9) return 'Acima do peso (sobrepeso)';
  if (imc < 34.9) return 'Obesidade grau I';
  if (imc < 39.9) return 'Obesidade grau II';
  if (imc >= 40) return 'Obesidade graus III e IV';
};
module.exports = imcClass;
