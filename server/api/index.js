const express = require('express');
const router = express.Router();

const publish = require('./publish');

router.use('/publish', publish);

module.exports = router;
