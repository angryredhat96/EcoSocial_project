const express = require('express');
const fileMiddleware = require('../middleware/file');
const { User } = require('../db/models');

const router = express.Router();

router.post('/upload', fileMiddleware.single('avatar'), async (req, res) => {
  console.log(req.file, 'QQQQQQQ');
  try {
    if (req.file) {
      await User.update(
        { image: req?.file?.path },
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
