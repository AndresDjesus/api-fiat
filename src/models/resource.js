module.exports = (DataTypes, sequelize) => {
    const Resource = sequelize.define('Resource', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url : {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        paranoid: true
    });
    return Resource 
}