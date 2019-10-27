const { isCustomError, status } = require('./messages');

const isApplicationError = error => Object.keys(messages.status.keys).includes(error);

const errorMiddleware = (err, req, res, next) => {
  const { message } = err;
  if (isCustomError(message)) res.status(status[message]).json({ message });

  return next(err);
};

module.exports = errorMiddleware;
