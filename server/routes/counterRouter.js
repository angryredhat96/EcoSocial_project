const express = require('express');
const { Event, User } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const participants = await Counter.findAll({ order: [['createdAt', 'DESC']]});
    res.json(participants);
  })
  .post(async (req, res) => {
    const newParticipant = await Counter.findOrCreate({
      userId: req.session.user.id,
    });
    res.json(newParticipant);
  });

module.exports = router;
