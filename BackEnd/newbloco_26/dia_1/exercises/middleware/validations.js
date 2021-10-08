const { isValid } = require('../model/User');

const isValidPassword = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (isValid(firstName, lastName, email, password) === 'passwords')
    return res
      .status(404)
      .json({ error: true, message: 'O campo "password" deve ser uma string' });
  if (isValid(firstName, lastName, email, password) === 'password6')
    return res.status(404).json({
      error: true,
      message: 'O campo "password" deve ter pelo menos 6 caracteres',
    });

  next();
};

const isValidAll = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const isValidReturn = isValid(firstName, lastName, email, password);
  if (isValidReturn) {
    return res.status(404).json({
      error: true,
      message: `O campo "${isValidReturn}" é obrigatório`,
    });
  }

  next();
};

module.exports = { isValidPassword, isValidAll };
