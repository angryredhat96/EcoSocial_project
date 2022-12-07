const express = require('express');
const { User } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const allUsers = await User.findAll({ order: [['createdAt', 'DESC']] });
    console.log(allUsers, 'USER');
    res.json(allUsers);
    console.log('wtffff', allUsers);
  });

router.get('/oneuser', async (req, res) => {
  const oneUser = await User.findByPk(req.session.user.id);
  res.json(oneUser);
});

module.exports = router;
