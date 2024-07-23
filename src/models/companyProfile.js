module.exports = (DataTypes, sequelize) => {
    const CompanyProfile = sequelize.define('CompanyProfile', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        mission: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        vision: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        history: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        timestamps: true,
        paranoid: true
    });
    return CompanyProfile
}