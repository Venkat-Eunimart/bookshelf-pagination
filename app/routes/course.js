const express = require('express');
const router = express.Router();
const CourseDetails = require('../service/course');
let course = new CourseDetails();
const courseSchema = require('../express-validator/schema/course-schema');
const validate = require('../express-validator/middleware/validate-request-schema');
let { ValidationError } = require('express-json-validator-middleware');


router.post('/create', validate({ body: courseSchema }), (req, res) => {
  // res.send("valid");
  course.create(req, res);
});
router.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(400).send('invalid');
    console.log(err);
    next();
  }
  else next(); // pass error on if not a validation error
});
module.exports = router;
