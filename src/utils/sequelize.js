const { Sequelize } = require('sequelize');
const { DB_HOST, DB_DIALECT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
console.log(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${'postgres'}`);
const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${'postgres'}`)

module.exports = sequelize