const express = require('express');
const app = express();
const { port } = require('../../../configs/server');

const middlewares = require('./middlewares');

app.use(...middlewares.default);

const api = require('./api');
app.use('/api', api);

app.use(...middlewares.error);

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
});
