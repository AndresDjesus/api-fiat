module.exports = (DataTypes, sequelize) => {
    const Company = sequelize.define('Company', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description : {
            type: DataTypes.TEXT,
        },
    }, {
        timestamps: true,
        paranoid: true
    });
    return Company
}