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
        execute : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
        },
        read : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
        },
        write : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
        }
    },{
        timestamps: true,
        paranoid: true
    });
    return Permission
}