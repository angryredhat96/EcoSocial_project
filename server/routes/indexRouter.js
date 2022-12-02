const express = require('express');
const { Place, Image } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allPlaces = await Place.findAll();
  res.json(allPlaces);
});

router.post('/places', async (req, res) => {
  const addPlace = await Place.create(req.body);
  console.log(addPlace);
  res.json(addPlace);
});

router.get('/location/:id', async (req, res) => {
  console.log(req.params.id, 'req.pppp');
  const onePlace = await Place.findOne({ include: Image, where: { id: req.params.id } });
  console.log(onePlace, 'onePlace');
  res.json(onePlace);
});

module.exports = router;
