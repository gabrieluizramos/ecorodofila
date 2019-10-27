const next = require('next')
const express = require('express')

const config = require('../../../configs/server');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './app/entrypoint/http/dashboard'
});

const handler = app.getRequestHandler(app)


app.prepare().then(() => {
  express().use(handler).listen(config.ports.next)
});
