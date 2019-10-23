const errors = require('../../middlewares/error/messages');

const { prioritize } = require('../../../publishers/incidents/prioritize');
const { isValidIncident } = require('../../../publishers/incidents/validate');

const validateIncident = (req, res, next) => {
  if (!isValidIncident(req.body.incident)) throw new Error(errors.INVALID_INCIDENT_PAYLOAD);

  return next();
};

const prioritizeMiddleware = (req, res, next) => {
  const { incident } = req.body;
  incident.priority = prioritize(incident);

  return next();
};

module.exports = [
  validateIncident,
  prioritizeMiddleware
];
