const express = require('express');
const { Event, User } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const allEvents = await Event.findAll({ order: [['createdAt', 'DESC']], include: User });
    res.json(allEvents);
  })
  .post(async (req, res) => {
    const {
      title, description, date, tgLink,
    } = req.body;
    const newEvent = await Event.create({
      title, description, date, tgLink,
    });
    const eventWithUser = await Event.findByPk(newEvent.id, { include: User });
    res.json(eventWithUser);
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

module.exports = router;
