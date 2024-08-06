module.exports = (DataTypes, sequelize) => {
    const Combustible = sequelize.define('Combustible', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ciudad: {
            type: DataTypes.STRING,
        },
        carretera: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return Combustible
}