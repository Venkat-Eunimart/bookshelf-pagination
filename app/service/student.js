const bodyParser = require("body-parser");
const Knex=require('../util/knex');
const Course = require("../models/course");
const Student = require("../models/students");


class student2 {
  async createStudent(req, res) {
    await Student.forge({
      id: req.body.id,
      name: req.body.name,
      emailid: req.body.emailid
    })
      .save(null, {
        method: 'insert'
      })
      .then(student => {
        res.json({
          "insert": "success"
        });
        console.log({ student });
      })
      .catch(err => {
        res.json({
          "Record": "Already there Cannot be inserted"
        });
        console.log(err);
      })
  }
  async readFull(req, res) {
    // let id = req.query.id;
    // console.log(id);
    // await Student.where({ id: id })
    //   .fetch({
    //     withRelated: ['courses'],
    //     required: true
    //   })
    //   .then(student => {
    //     res.json({ student })
    //   })
    //   .catch(err => {
    //     // res.json(err
    //     console.log(err);
    //   })
    let page=req.query.page;
    await Student.forge()
    .orderBy('-name')
    .fetchPage({pageSize:4,page:page})
    .then(function(results){
      console.log(results)
      res.json(results);
    })
   
    
 
  }


  async deleteRow(req, res) {
    const id = req.body.id;
    console.log(id);
    const del1 = await Student
      .where('id', id)
      .destroy()
    res.json({
      "deletion": "success"
    });
  }
}

module.exports = student2;
