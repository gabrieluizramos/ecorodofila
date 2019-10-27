const bodyParser = require('body-parser');
const cors = require('cors');

const auth = require('./auth');

const error = require('./error');

module.exports = {
  default: [
    cors(),
    bodyParser.json(),
    auth
  ],
  error: [
    error
  ]
};
