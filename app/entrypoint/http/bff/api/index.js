const express = require('express');
const router = express.Router();

const login = require('./login');
const incident = require('./incident');
const count = require('./count');

router.use('/login', login);
router.use('/incident', incident);
router.use('/count', count);

module.exports = router;
