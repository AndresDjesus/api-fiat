module.exports = (DataTypes, sequelize) => {
  const Footer = sequelize.define('footer', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      address: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      phone : {
          type: DataTypes.STRING,
          allowNull: false,
      },
      social_networks : {
          type: DataTypes.JSON,
          allowNull: false,
      }
  }, {
      timestamps: true,
      paranoid: true
  });
  return Footer
}