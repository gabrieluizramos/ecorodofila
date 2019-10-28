const express = require('express');

const storage = require('../services/storage');
const errors = require('../middlewares/error/messages');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('*', (req, res) => {
  const { incident } = req.body;
  storage.saveIncident(incident);

  return res.status(200).json({ received: true });
});

router.get('*', auth, (req, res) => {
  const { user } = req;

  const incident = storage.getAllUserIncidents(user);

  return res.status(200).json({ incident });
});

module.exports = router;
