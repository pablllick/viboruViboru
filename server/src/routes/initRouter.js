const express = require('express');
const { Init, User, UserInit } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const initRouter = express.Router();

initRouter
  .route('/')
  .get(async (req, res) => {
    try {
      res.json(await Init.findAll());
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const { user } = res.locals;
      const { name, motivation, level, theme, dateEnd } = req.body;
      const newInit = await Init.create({
        name,
        motivation,
        level,
        theme,
        dateEnd,
        userId: user.id,
      });
      await UserInit.create({
        userId: user.id,
        initId: newInit.id,
        vote: true,
      });
      res.json(newInit);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

initRouter.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const init = await Init.findByPk(id);
    if (!init) return res.json({ message: 'Несуществующий id' });
    res.json(init);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

initRouter.route('/votes/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const people = await Init.findOne({
      where: { id },
      include: {
        model: User,
        as: 'allPeople',
        attributes: { exclude: ['hashpass', 'email', 'surname'] },
        through: { attributes: ['vote', 'userId', 'initId'] },
      },
    });
    res.json(people);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = initRouter;
