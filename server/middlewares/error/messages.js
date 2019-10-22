// Error messages
exports.USER_NOT_AUTHORIZED = 'User not authorized';
exports.INVALID_INCIDENT_PAYLOAD = 'Invalid incident payload';
exports.INCIDENT_CREATION_ERROR = 'There was an error while trying to create your incident';

// Error status
exports.status = {
  [exports.USER_NOT_AUTHORIZED]: 401,
  [exports.INVALID_INCIDENT_PAYLOAD]: 400,
  [exports.INCIDENT_CREATION_ERROR]: 500
};

// Error validator
exports.isCustomError = error => Object.keys(exports.status).includes(error);
