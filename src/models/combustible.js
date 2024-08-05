module.exports = (DataTypes, sequelize) => {
    const Combustible = sequelize.define('Combustible', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carretera: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        timestamps: true,
        paranoid: true
    });

    return Combustible
}