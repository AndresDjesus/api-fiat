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
    description : {
      type: DataTypes.STRING,
    },
    transmission: {
      type: DataTypes.ENUM('manual', 'automatic'),
      allowNull: false,
    },
    screen: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
    paranoid: true
  });
  return Vehicle
}
