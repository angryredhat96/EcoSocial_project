const express = require('express');
const vidMiddleware = require('../middleware/vidFale');
const { Image } = require('../db/models');

const router = express.Router();

router.post('/addphoto/:id', vidMiddleware.array('photos', 10), async (req, res) => {
  const { id } = req.params;
  const image = [];
  (req.files)?.forEach((element) => {
    image.push(element.filename);
  });
  const photo = await Image.bulkCreate(
    image.map((str) => ({
      image: str,
      placeId: id,
    })),
  );
  res.json(photo);
});

module.exports = router;
