const sequelize = require('../utils/sequelize');
const { DataTypes } = require('sequelize');

module.exports = (DataTypes, sequelize) => {
  const Vehicle = sequelize.define('Vehicle', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING(1234),
    },
    price: {
      type: DataTypes.STRING(1234),
    },
  });
  return Vehicle
}
