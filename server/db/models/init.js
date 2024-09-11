const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Init extends Model {
    static associate(models) {
      this.belongsToMany(models.User, {
        through: 'UserInits',
        as: 'allPeople',
        foreignKey: 'initId',
      });
      this.belongsTo(models.User, { foreignKey: 'authorId' });
    }
  }
  Init.init(
    {
      name: DataTypes.STRING,
      motivation: DataTypes.TEXT,
      level: DataTypes.STRING,
      dateEnd: DataTypes.DATE,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Init',
    },
  );
  return Init;
};
