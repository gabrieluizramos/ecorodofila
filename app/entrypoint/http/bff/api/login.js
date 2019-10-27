const express = require('express');

const { users, tokens } = require('../../../../configs/auth');

const errors = require('../middlewares/error/messages');

const router = express.Router();

router.post('*', (req, res) => {
  const user = req.body.email;

  if (users.has(user)) {
    const token = tokens.get(user);
    return res.status(200).json({ token })
  }

  throw new Error(errors.USER_NOT_AUTHORIZED)
});

router.get('*', (req, res) => {
  console.log(req.cookies);
  return res.status(200);
});

module.exports = router;
