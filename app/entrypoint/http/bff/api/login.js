const express = require('express');

const { users, tokens, names } = require('../../../../configs/auth');

const errors = require('../middlewares/error/messages');

const router = express.Router();

router.post('*', (req, res) => {
  const { email: user, password } = req.body;

  if (users.has(user) && users.get(user) === password) {
    const token = tokens.get(user);
    return res.status(200).json({ token, name: names.get(user) })
  }

  throw new Error(errors.USER_NOT_AUTHORIZED)
});

module.exports = router;
