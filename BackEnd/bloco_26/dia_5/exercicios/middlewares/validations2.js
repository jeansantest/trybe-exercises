const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token.split(' ')[1].length !== 12) {
    return res.status(401).json({ message: 'invalid token' });
  }

  next();
};

module.exports = { isValidToken };
