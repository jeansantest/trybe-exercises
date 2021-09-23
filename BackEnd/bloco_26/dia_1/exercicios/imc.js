const imc = (peso, altura) => {
  return (peso / altura ** 2) * 10000;
};

module.exports = imc;
