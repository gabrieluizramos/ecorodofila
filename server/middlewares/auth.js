const errors = require('./error/messages');
const { tokens } = require('../../config/auth');

const isValidToken = token => tokens.has(token);

const isAuthenticatedUser = (req, res, next) => {
  if(!isValidToken(req.headers.authorization)) throw new Error(errors.USER_NOT_AUTHORIZED);

  return next();
};

module.exports = isAuthenticatedUser;
