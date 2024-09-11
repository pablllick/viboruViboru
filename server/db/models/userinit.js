const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserInit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserInit.init(
    {
      userId: DataTypes.INTEGER,
      initId: DataTypes.INTEGER,
      vote: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'UserInit',
    },
  );
  return UserInit;
};
