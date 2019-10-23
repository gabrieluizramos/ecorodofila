const errors = require('../../middlewares/error/messages');

const { isValidIncident } = require('../../../../../usecase/prioritize-incident');

const validateIncident = (req, res, next) => {
  if (!isValidIncident(req.body.incident)) throw new Error(errors.INVALID_INCIDENT_PAYLOAD);

  return next();
};

module.exports = [
  validateIncident
];
