const express = require('express');
const router = express.Router();

const incident = require('./incident');

router.use('/incident', incident);

module.exports = router;
