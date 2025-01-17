module.exports = (DataTypes , sequelize) => {
    const Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull : false,
        }
    },{
        timestamps: true,
        paranoid: true
    });
    return Role
}