const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
const student = require('./app/routes/student');
const course = require('./app/routes/course');

app.use('/student', student);
app.use('/course', course);
app.listen(3000, function (req, res) {
  console.log("Server started on port 3000");
});
