const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateNoteSchema = new Schema({
  created: {
    type: Date,
    default : Date.now,
  },

  candidate_id: {
    type: Object,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  }
})


const candidateNote = mongoose.model('candidateNote', candidateNoteSchema, "candidateNote")

module.exports = candidateNote