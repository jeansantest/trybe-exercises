const exerciseThree = async () => {
  try {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      throw new Error('Informe apenas números');
    }

    const result = (a + b) * c;

    await result < 50 ? throw new Error('Valor muito baixo') : ;
  } catch (err) {
    console.log(err.message);
  }
};
