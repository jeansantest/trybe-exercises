const fatorial = (num) => (num <= 1 ? 1 : fatorial(num - 1) * num);

module.exports = fatorial;
