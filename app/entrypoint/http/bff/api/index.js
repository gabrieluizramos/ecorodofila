const express = require('express');
const router = express.Router();

const login = require('./login');
const incident = require('./incident');

router.use('/login', login);
router.use('/incident', incident);

module.exports = router;
