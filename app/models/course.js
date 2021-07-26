const bookshelf=require('../util/database');
const Course = bookshelf.model('Course',{
  tableName:'courses'
});
module.exports=Course;
