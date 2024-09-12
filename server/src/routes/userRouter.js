const express = require('express');
const { User } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

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
      const { id } = res.locals;
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
        { where: { id } }
      );
      res.send('все ок');
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const { name, lastName, surname, email } = req.body;

      // Проверка наличия всех обязательных полей
      if (!name || !lastName || !surname || !email) {
        return res.status(400).json({ message: 'Заполните все поля' });
      }

      // Создание нового пользователя
      const newUser = await User.create({
        name,
        lastName,
        surname,
        email,
      });

      // Удаление чувствительных данных перед отправкой ответа
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
