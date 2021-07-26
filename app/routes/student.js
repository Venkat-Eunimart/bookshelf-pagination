const express = require('express');
const router = express.Router();
const Student2 = require('../service/student');
let { ValidationError } = require('express-json-validator-middleware');
const studentSchema = require('../express-validator/schema/student-schema');
const validate = require('../express-validator/middleware/validate-request-schema');
let student1 = new Student2();
router.get('/read', (req, res,) => {
  student1.readFull(req, res);
});
router.delete('/delete', (req, res,) => {
  student1.deleteRow(req, res);
});

router.post('/create', validate({ body: studentSchema }), (req, res) => {
  student1.createStudent(req, res);
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
