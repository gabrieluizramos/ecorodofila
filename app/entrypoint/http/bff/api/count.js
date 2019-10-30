const express = require('express');

const storage = require('../services/storage');

const router = express.Router();

router.get('/status', (req, res) => {
  const incidents = storage.getAllIncidentsByPriority();

  return res.status(200).json({ incidents });
});

module.exports = router;
