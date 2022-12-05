const express = require('express');
const { Event, User, Subscriber } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const allEvents = await Event.findAll({ order: [['createdAt', 'DESC']], include: User });
    res.json(allEvents);
  });
router.route('/:id')
  .post(async (req, res) => {
    const {
      title, description, date, tgLink,
    } = req.body;
    console.log('reqqqq', req.params);
    const newEvent = await Event.create({
      title, description, date: new Date(date), tgLink, userId: req.session.user.id, placeId: req.params.id,
    });
    // const eventWithUser = await Event.findByPk(newEvent.id, { include: User });
    res.json(newEvent);
  });

router.route('/joiners')
  .get(async (req, res) => {
    const allJoiners = await Subscriber.findAll({ order: [['createdAt', 'DESC']], include: User });
    res.json(allJoiners);
  })
  .post(async (req, res) => {
    const newJoiner = await Subscriber.findOrCreate({
      userId: req.session.user.id, eventId: req.params,
    });
    res.json(newJoiner);
  });

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Event.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.patch('/:id/edit', async (req, res) => {
  try {
    const {
      title, description, date, tgLink,
    } = req.body;
    const fin = {
      title, description, date: new Date(date), tgLink, userId: req.session.user.id,
    };
    console.log(fin, ' fin');
    const { id } = req.params;
    await Event.update(fin, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
