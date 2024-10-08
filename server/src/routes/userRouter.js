const express = require('express');
const { User } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../configs/cookiesConfig');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['hashpass', 'createdAt', 'updatedAt'] },
      });
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .patch(verifyAccessToken, async (req, res) => {
    try {
      const { user } = res.locals;
      const { name, lastName, surname, fedDistrict, region, municipality } =
        req.body;
      await User.update(
        {
          name,
          lastName,
          surname,
          fedDistrict,
          region,
          municipality,
        },
        { where: { id: user.id } }
      );
      const newUser = await User.findByPk(user.id, {
        attributes: { exclude: ['hashpass', 'createdAt', 'updatedAt'] },
      });
      const { accessToken, refreshToken } = generateTokens({ user: newUser });
      res
        .cookie('refreshToken', refreshToken, cookiesConfig)
        .json({ user: newUser, accessToken });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const { name, lastName, surname, email } = req.body;

      if (!name || !lastName || !surname || !email) {
        return res.status(400).json({ message: 'Заполните все поля' });
      }

      const newUser = await User.create({
        name,
        lastName,
        surname,
        email,
      });

      const user = newUser.get();
      delete user.hashpass;
      delete user.createdAt;
      delete user.updatedAt;

      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });

userRouter.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: { exclude: ['hashpass', 'createdAt', 'updatedAt'] },
    });
    if (!user) return res.status(404).json({ message: 'Несуществующий id' });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = userRouter;
