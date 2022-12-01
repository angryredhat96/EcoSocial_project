const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Event, {
        foreignKey: 'placeId',
      });
      this.hasMany(models.Image, {
        foreignKey: 'placeId',
      });
    }
  }
  Place.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    geo: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};
