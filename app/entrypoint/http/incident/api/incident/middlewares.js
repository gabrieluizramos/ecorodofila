const errors = require('../../middlewares/error/messages');

const prioritizeUseCase = require('../../../../../usecase/prioritize-incident');

const validateIncident = (req, res, next) => {
  if (!prioritizeUseCase.validate(req.body.incident)) throw new Error(errors.INVALID_INCIDENT_PAYLOAD);

  return next();
};

module.exports = [
  validateIncident
];
