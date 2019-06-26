const secret = require('./secret');

module.exports = {  
  development: {  
    username: 'mymoney',  
    password: secret.DATABASE_PASSWORD,  
    database: 'mymoney',  
    host: '127.0.0.1',  
    dialect: 'postgres'  
  },  
  
};