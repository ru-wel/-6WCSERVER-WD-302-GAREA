const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let propertySchema = new Schema({
  title: {
    type: String
  },
  location: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: String
  }
}, {
  collection: 'properties'
})
module.exports = mongoose.model('Property', propertySchema)