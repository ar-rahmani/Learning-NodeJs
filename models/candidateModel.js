const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema = new Schema({
  
  candidate_firstname: {
    type: String,
    trim: true,
    default: ''
  },

  candidate_lasttname: {
    type: String,
    trim: true,
    default: ''

  }

})

const candidateModel =mongoose.model('candidateModel',candidateSchema)

module.exports = candidateModel