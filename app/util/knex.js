const knex = require('knex')({
   client: 'mysql',
  version: '5.7',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'password',
    database : 'database1',
    charset:'utf8'
  }
});
module.exports=knex;