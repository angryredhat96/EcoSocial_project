const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Event, {
        foreignKey: 'eventId',
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  }
  Subscriber.init({
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Subscriber',
  });
  return Subscriber;
};
