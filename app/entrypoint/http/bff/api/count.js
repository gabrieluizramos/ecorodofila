const express = require('express');

const storage = require('../services/storage');

const router = express.Router();

router.get('/status', (req, res) => {
  const incidents = storage.getAllIncidents(true);

  console.log('all', incidents);

  return res.status(200).json({ incidents });
});

module.exports = router;
