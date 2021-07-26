const bodyParser = require("body-parser");
const Course = require("../models/course");
class courseDetails {
  async create(req, res) {
    await Course.forge({
      course: req.body.course,
      student_id: req.body.student_id

    }).save(null, {
      method: 'insert'
    })
      .then(course => {
        res.json({
          "insert": "success"
        });
        console.log(course);
      })
      .catch(err => {
        res.json({
          "Message": "something went wrong"
        });
        console.log(err);
      })
  }

}
module.exports = courseDetails;
