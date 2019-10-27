// Error messages
exports.USER_NOT_AUTHORIZED = 'User not authorized';

// Error status
exports.status = {
  [exports.USER_NOT_AUTHORIZED]: 401,
};

// Error validator
exports.isCustomError = error => Object.keys(exports.status).includes(error);
