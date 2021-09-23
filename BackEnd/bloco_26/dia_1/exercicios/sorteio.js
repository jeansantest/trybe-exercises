const sorteio = (num) => {
  const numSorted = Math.floor(Math.random() * 10);
  if (numSorted === num) {
    return 'Parabéns, número correto!';
  } else {
    return `Opa, não foi dessa vez. O número era ${numSorted}`;
  }
};

module.exports = sorteio;
