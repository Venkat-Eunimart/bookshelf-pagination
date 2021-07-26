const bookshelf=require('../util/database');
const Student = bookshelf.model('Student',{
  tableName:'student',
  courses(){
    return this.hasMany('Course')
  }
});
module.exports=Student;
