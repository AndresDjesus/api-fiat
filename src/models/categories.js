module.exports = (DataTypes, sequelize) => {
    const Categories = sequelize.define('Category', {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            name: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true
            }
        }, {
            timestamps: true,
            paranoid: true
          }
    );
    return Categories
}