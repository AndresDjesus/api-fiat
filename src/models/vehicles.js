const images = require('./images');
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
    },
  }, {
    timestamps: true,
    paranoid: true
  });

//  Vehicle.belongsTo(require('./categories')(DataTypes, sequelize), { foreignKey: 'category_id', allowNull: false, references: { model: 'Category', key: 'id' } });
//  Vehicle.belongsTo(require('./motors')(DataTypes, sequelize), { foreignKey: 'motor_id', allowNull: false, references: { model: 'Motor', key: 'id' } });
 Vehicle.hasMany(images(DataTypes, sequelize));

  return Vehicle
}
