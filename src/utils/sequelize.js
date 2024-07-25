const { allow } = require('joi');
const { Sequelize, DataTypes } = require('sequelize');
const { DB_HOST, DB_DIALECT, DB_USER, DB_PASSWORD, DB_ALTER_SYNC, DB_FORCE_SYNC } = process.env;


const sequelize = new Sequelize({
  dialect: DB_DIALECT,
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: 'postgres',
});

console.log();


sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Agregar modelos
db.categories = require('../models/categories')(DataTypes, sequelize);
db.images = require('../models/images')(DataTypes, sequelize);
db.motors = require('../models/motors')(DataTypes, sequelize);
db.vehicles = require('../models/vehicles')(DataTypes, sequelize);
db.services = require('../models/services')(DataTypes, sequelize);
db.company = require('../models/company')(DataTypes, sequelize);
db.companyProfile = require('../models/companyProfile')(DataTypes, sequelize);
db.location = require('../models/location')(DataTypes, sequelize);
db.blog = require('../models/blog')(DataTypes, sequelize);
console.log(sequelize , "ANTEEEEEEESSSSSSSSSSSSSSSSSSSSSSS")
db.footer = require('../models/footer')(DataTypes, sequelize);
console.log(sequelize , "DESPUUUUUUEESSSSSSSSSSSSSSSSSSSSSSS")

// relationships 
db.categories.hasMany(db.vehicles, { foreignKey: 'category_id' });
db.vehicles.belongsTo(db.categories, { as: 'category', foreignKey: 'category_id' });
db.motors.hasMany(db.vehicles, { foreignKey: 'motor_id' });
db.vehicles.belongsTo(db.motors, { as: 'motor', foreignKey: 'motor_id' });
db.vehicles.hasMany(db.images, { foreignKey: { name: 'vehicle_id', allowNull: true } });
db.images.belongsTo(db.vehicles, { as: 'vehicle', foreignKey: { name: 'vehicle_id', allowNull: true } });

db.images.belongsTo(db.services, { as: 'service', foreignKey:{ name: 'service_id', allowNull: true } });
db.services.hasMany(db.images, { foreignKey: { name: 'service_id', allowNull: true } });

db.company.hasMany(db.companyProfile, { foreignKey: { name: 'company_id', allowNull: false } });
db.companyProfile.belongsTo(db.company, { as: 'profile', foreignKey: { name: 'company_id', allowNull: false } });
 db.company.hasMany(db.location, { foreignKey: 'company_id' });
 db.location.belongsTo(db.company, { as: 'location', foreignKey: 'company_id' });
  db.images.belongsTo(db.company, { as: 'images', foreignKey: 'company_id' });
  db.company.hasMany(db.images, { foreignKey: 'company_id' });

db.blog.hasMany(db.images, { foreignKey:{ name: 'blog_id', allowNull: true } });
db.images.belongsTo(db.blog, { as: 'blog', foreignKey:{ name: 'blog_id', allowNull: true } });

 db.footer.hasMany(db.images, { foreignKey:{ name: 'footer_id', allowNull: true } });
db.images.belongsTo(db.footer, { as: 'footer', foreignKey:{ name: 'footer_id', allowNull: true } });

db.sequelize.sync({
  alter: true,
  force: false,
});

module.exports = db;