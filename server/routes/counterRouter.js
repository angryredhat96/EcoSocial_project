const express = require('express');
const { Event, User, Subscriber } = require('../db/models');

const router = express.Router();

router.route('/event/:id')
  .get(async (req, res) => {
    const eventParticipants = await Subscriber.findAll({ order: [['createdAt', 'DESC']], where: { eventId: req.params.id } });
    res.json(eventParticipants);
  })
  .post(async (req, res) => {
    const newParticipant = await Subscriber.findOrCreate({ where: { userId: req.session.user.id, eventId: req.params.id } });
    res.json(newParticipant);
  });

router.route('/lkevents')
  .get(async (req, res) => {
    const lkEvents = await Subscriber.findAll({ where: { userId: req.session.user.id }, include: Event, order: [['createdAt', 'DESC']] });
    res.json(lkEvents);
  });

router.route('/profileevents/:id')
  .get(async (req, res) => {
    const profileEvents = await Subscriber.findAll({ where: { userId: req.params.id }, include: Event });
    res.json(profileEvents);
  });

module.exports = router;
