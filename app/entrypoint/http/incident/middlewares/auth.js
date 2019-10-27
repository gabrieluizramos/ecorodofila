const errors = require('./error/messages');
const { tokens } = require('../../../../configs/auth');

const isValidToken = (user, token) => token === tokens.get(user);

const isAuthenticatedUser = (req, res, next) => {
  const [user, token] = req.headers.authorization.split(':');

  if(!isValidToken(user, token)) throw new Error(errors.USER_NOT_AUTHORIZED);

  return next();
};

module.exports = isAuthenticatedUser;
