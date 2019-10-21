const express = require('express');
const app = express();
const { port } = require('../config/server');

const middlewares = require('./middlewares');

app.use(...middlewares);

const api = require('./api');
app.use('/api', api);

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
});
