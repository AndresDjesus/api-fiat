module.exports = (DataTypes, sequelize) => {
    const Advertising = sequelize.define('Advertising', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    });
    return Advertising
}