module.exports = (DataTypes , sequelize) => {
    const Inside = sequelize.define('Inside', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
        timestamps: true,
        paranoid: true
    });
    return Inside
}