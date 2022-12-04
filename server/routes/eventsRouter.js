const express = require('express');
const { Event, User } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const allEvents = await Event.findAll({ order: [['createdAt', 'DESC']], include: User });
    const user = await User.findOne({ where: { id: req.session.user.id } });
    res.json(allEvents);
  })
  .post(async (req, res) => {
    const {
      title, description, date, tgLink,
    } = req.body;
    const newEvent = await Event.create({
      title, description, date: new Date(date), tgLink, userId: req.session.user.id,
    });
    // const eventWithUser = await Event.findByPk(newEvent.id, { include: User });
    res.json(newEvent);
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
    const { id } = req.params;
    await Event.update(fin, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
