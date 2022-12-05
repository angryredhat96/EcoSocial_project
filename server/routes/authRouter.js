const express = require('express');
const { hash, compare } = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/reg', async (req, res) => {
  const { name, email, password } = req.body.inputs;

  if (!name) return res.status(400).json({ message: 'Введите имя!' });
  if (!email) return res.status(400).json({ message: 'Введите почту!' });
  if (!password) return res.status(400).json({ message: 'Придумайте пароль!' });

  const hashPassword = await hash(password, 10);

  const emailInDb = await User.findOne({ where: { email } });
  if (emailInDb) return res.status(400).json({ message: 'Пользователь с таким email уже существует' });

  try {
    const newUser = await User.create({
      name, email, password: hashPassword,
    });
    req.session.user = {
      id: newUser.id, name: newUser.name, email: newUser.email,
    };
    res.json({
      id: newUser.id, name: newUser.name, email: newUser.email, image: newUser.image,
    });
  } catch (err) {
    console.error(err);
  }
});
router.post('/log', async (req, res) => {
  const { email, password } = req.body.inputs;
  console.log(email);

  if (!email) return res.status(400).json({ message: 'Введите почту!' });
  if (!password) return res.status(400).json({ message: 'Введите пароль!' });

  try {
    const userFromDb = await User.findOne({ where: { email } });
    if (!userFromDb) return res.status(400).json({ message: 'Данный пользователь не существует' });
    const isValid = await compare(password, userFromDb.password);

    if (!isValid) return res.status(400).json({ message: 'Почта или пароль не верны' });

    req.session.user = {
      id: userFromDb.id, name: userFromDb.name, email: userFromDb.email,
    };
    res.json({
      id: userFromDb.id, name: userFromDb.name, email: userFromDb.email, image: userFromDb.image,
    });
  } catch (err) {
    console.error(err);
  }
});

router.post('/check', async (req, res) => {
  if (req.session.user) {
    const currUser = await User.findByPk(req.session.user.id);
    const user = {
      id: currUser.id,
      name: currUser.name,
      email: currUser.email,
      image: currUser.image,
    };
    return res.json(user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;
