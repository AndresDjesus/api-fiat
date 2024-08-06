module.exports = (DataTypes, sequelize) => {
    const CompanyProfile = sequelize.define('CompanyProfile', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
        },
        schedule: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: true,
        paranoid: true
    });
    return CompanyProfile
}