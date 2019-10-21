const express = require('express');
const router = express.Router();

const middlewares = require('./middlewares');

const publishIncident = require('../../../publishers/incidents');

router.use(...middlewares);

router.post('*', async (req, res) => {
  const created = await publishIncident(req.body.incident);

  if (created) {
    return res.status(201).json({ message: 'Incident created with success' });
  } else {
    return res.status(500).json({ message: 'There was an error while trying to create your incident' });
  }
});

module.exports = router;
