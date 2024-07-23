module.exports = (DataTypes, sequelize) => {
    const Categories = sequelize.define('Location', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });
    return Categories
}
