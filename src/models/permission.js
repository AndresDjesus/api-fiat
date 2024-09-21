module.exports = (DataTypes , sequelize) => {
    const Permission = sequelize.define('Permission', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        action : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        resource : {
            type: DataTypes.STRING,
            allowNull : false,
        }
    },{
        timestamps: true,
        paranoid: true
    });
    return Permission
}