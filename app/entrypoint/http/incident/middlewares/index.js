const bodyParser = require('body-parser');
const auth = require('./auth');

const error = require('./error');

module.exports = {
  default: [
    bodyParser.json(),
    auth
  ],
  error: [
    error
  ]
};
