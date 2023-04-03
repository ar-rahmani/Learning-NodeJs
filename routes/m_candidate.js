const express = require('express')
const mongoose = require('mongoose')
const sanitizeHtml = require('sanitize-html')
const candidateNote = require('../models/candidatNoteModel')

const m_router = express.Router()


m_router
  .post('/candidates/:candidateId/note', async (req, res, next) => {
    const clean = sanitizeHtml(JSON.stringify(req.body))
    const note = new candidateNote(JSON.parse(clean))
    try {
      const result = await note.save()
      res.send(note)
    }
    catch (error) {
      res.status(500).send('Error')
    }
    next()

})

module.exports = m_router