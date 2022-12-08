const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Place, {
        foreignKey: 'placeId',
      });
      this.hasMany(models.Subscriber, {
        foreignKey: 'eventId',
        onDelete: 'cascade',
      });
    }
  }
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    tgLink: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
