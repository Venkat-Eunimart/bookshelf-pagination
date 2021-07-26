
var schema = {
  type: 'object',
  required: ['id', 'name', 'emailid'],
  properties: {
    id: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    emailid: {
      type: 'string'
    }

  }
}
module.exports = schema;
