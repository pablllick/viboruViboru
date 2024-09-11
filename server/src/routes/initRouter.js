const express = require('express');
const { Init } = require('../../db/models');
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
      const { user } = req.locals;
      const { name, motivation, level, theme, dateEnd } = req.body;
      res.json(
        await Init.create({
          name,
          motivation,
          level,
          theme,
          dateEnd,
          authorId: user.id,
        })
      );
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

module.exports = initRouter;
