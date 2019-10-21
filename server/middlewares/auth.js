const { tokens } = require('../../config/auth');

const isValidToken = token => tokens.has(token);

const isAuthenticatedUser = (req, res, next) => {
  if(!isValidToken(req.headers.authorization)) return res.status(401).json({ message: 'User not authorized' });

  return next();
};

module.exports = isAuthenticatedUser;
