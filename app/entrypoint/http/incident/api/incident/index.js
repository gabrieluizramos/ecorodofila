const express = require('express');
const router = express.Router();

const errors = require('../../middlewares/error/messages');
const middlewares = require('./middlewares');

const incidentUseCase = require('../../../../../usecase/prioritize-incident');

router.use(...middlewares);

router.post('*', async (req, res) => {
  const created = await incidentUseCase.prioritizeIncidentAndPublish(req.body.incident);

  if (created) {
    return res.status(201).json({ message: 'Incident created with success' });
  } else {
    throw new Error(errors.INCIDENT_CREATION_ERROR);
  }
});

module.exports = router;
