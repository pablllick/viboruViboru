const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Init, { foreignKey: 'authorId' });
      this.belongsToMany(models.Init, {
        through: 'UserInits',
        as: 'allInits',
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      hashpass: DataTypes.STRING,
      fedDistrict: DataTypes.STRING,
      region: DataTypes.STRING,
      municipality: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
