module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.split(' ')[1].length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  return next();
};
