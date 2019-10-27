const express = require('express');
const app = express();

const config = require('../../../configs/server');

const middlewares = require('./middlewares');

app.use(...middlewares.default);

const api = require('./api');
app.use('/api', api);

app.use(...middlewares.error);

app.listen(config.ports.bff, () => {
  console.log(`BFF running at port ${config.ports.bff}`)
});
