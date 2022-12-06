const express = require('express');
const fileMiddleware = require('../middleware/file');
// const vidMiddleware = require('../middleware/vidFale');
const { User, Image } = require('../db/models');

const router = express.Router();

router.post('/upload', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    if (req.file) {
      await User.update(
        { image: req?.file?.path.replace('public/lk/', '') },
        { where: { id: req.session.user.id } },
      );
      const ava = await User.findOne({ where: { id: req.session.user.id } });
      res.json(ava.dataValues.image);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
