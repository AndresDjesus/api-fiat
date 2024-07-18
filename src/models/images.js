module.exports = (DataTypes, sequelize) => {
    const Image = sequelize.define('Image', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        base64: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        principal: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        }
      }, {
        timestamps: true,
        paranoid: true
      });
    Image.belongsTo(require('./vehicles')(DataTypes, sequelize), { foreignKey: 'vehicle_id', allowNull: false, references: { model: 'Vehicle', key: 'id' } });
    return Image
}