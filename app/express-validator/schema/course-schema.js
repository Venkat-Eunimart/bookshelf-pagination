
var schema = {
  type: 'object',
  required: ['course', 'student_id'],
  properties: {
    course: {
      type: 'string'
    },
    student_id: {
      type: 'number'
    }
  }
}

module.exports = schema;
