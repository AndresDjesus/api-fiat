module.exports = (DataTypes , sequelize) => {
    const Index = sequelize.define('Index', {
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
        buyVehicletitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        buyVehiclecontent: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
        WhiWe : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        LookingforVehicle : {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },{
        timestamps: true,
        paranoid: true
    });
    return Index
}