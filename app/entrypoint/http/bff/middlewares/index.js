const bodyParser = require('body-parser');
const cors = require('cors');

const error = require('./error');

module.exports = {
  default: [
    bodyParser.json(),
    cors()
  ],
  error: [
    error
  ]
};
