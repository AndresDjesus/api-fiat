const vehicles = require('./vehicles');

module.exports = (DataTypes, sequelize) => {
    const Motor = sequelize.define('Motors', {
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
    });

    // Motor.hasMany(require('./vehicles')(DataTypes, sequelize));
    return Motor
}