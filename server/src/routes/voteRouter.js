const express = require('express');
const { Init, User, UserInit } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const voteRouter = express.Router();

voteRouter.route('/').post(verifyAccessToken, async (req, res) => {
  try {
    const { vote, initId } = req.body;
    const { user } = res.locals;
    await UserInit.create({ initId, vote, userId: user.id });
    res.json(
      await Init.findOne({
        where: { id: initId },
        include: {
          model: User,
          as: 'allPeople',
          attributes: { exclude: ['hashpass', 'email', 'surname'] },
          through: { attributes: ['vote', 'userId', 'initId'] },
        },
      })
    );
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = voteRouter;
