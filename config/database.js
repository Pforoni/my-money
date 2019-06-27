//const secret = require('./secret');
const Sequelize = require('sequelize');

module.exports = {  
  development: {  
    username: 'mymoney',  
    password: process.env.DATABASE_PASSWORD, //secret.DATABASE_PASSWORD,  
    database: 'mymoney',  
    host: '127.0.0.1',  
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op
  },  
  
};