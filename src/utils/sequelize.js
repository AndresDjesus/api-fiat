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
db.vehicles = require('../models/vehicles')(DataTypes, sequelize);



db.sequelize.sync();
module.exports = db;