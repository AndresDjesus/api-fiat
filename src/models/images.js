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
        },
        order : {
          type: DataTypes.INTEGER
        },
      }, {
        timestamps: true,
        paranoid: true
      });
    return Image
}