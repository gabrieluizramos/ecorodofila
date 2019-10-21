const { isValidIncident } = require('../../../publishers/incidents/validate');

const validateIncident = (req, res, next) => {
  if (!isValidIncident(req.body.incident)) return res.status(400).json({ message: 'Invalid incident payload' });

  return next();
};

module.exports = [
  validateIncident
];
