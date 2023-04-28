const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateNoteSchema = new Schema({
  created : {
    type: Date ,
    default :Date.now,    
  },

  candidate_id : {
    type: Schema.Types.ObjectId,
    ref : 'candidateModel',
  },

   description: {
    type: String,
    required: true,
    trim: true,
  }
})


const candidateNoteModel = mongoose.model('candidateNoteModel', candidateNoteSchema)

module.exports = candidateNoteModel
