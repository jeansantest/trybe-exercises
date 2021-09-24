const createArray = require('./exercise2.js');

const exerciseOne = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    result < 50 ? reject(new Error('Valor muito baixo')) : resolve(result);
  });
};

// Exercicio 2 - chamada da promise com then catch
exerciseOne(...createArray(3))
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

// Exercicio 3 - chamada da promise com async await
const exerciseThree = async () => {
  try {
    const result = await exerciseOne(...createArray(3));
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

exerciseThree();

module.exports = exerciseOne;
