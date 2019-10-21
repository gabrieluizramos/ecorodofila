const bodyParser = require('body-parser');
const auth = require('./auth');

module.exports = [
  bodyParser.json(),
  auth
];
