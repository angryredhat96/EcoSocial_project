const express = require('express');
const { Image } = require('../db/models');

const router = express.Router();

router.get('/location/:id', async (req, res) => {
  const { id } = req.params;
  const allPhoto = await Image.findAll({ where: { placeId: id } });
  console.log(allPhoto, 'AAAAAAAAAAAAAAA');
  res.json(allPhoto);
});

module.exports = router;
