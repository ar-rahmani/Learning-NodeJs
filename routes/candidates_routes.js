const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const sanitizeHtml = require('sanitize-html')
const candidateNoteModel = require('../models/candidateNoteModel')
const candidateModel = require('../models/candidateModel')


const c_router = express.Router()

c_router
    .get('/retrieve', async function (req, res, next) {
        const all = await candidateModel.find({})
        res.send(all)       
        next()
    })
    
    .get('/:candidateId', async function (req, res, next) {
        const item = await candidateModel.findById({ _id: req.params.candidateId })
        console.log(item)
        if (item) {
            res.send(item)
        }
        else { //inja error dare vaghti item ro peida nemikone
            res.status(404).send('Not found')
        }
        next()
    })

    .post('/update/:candidateId', async function (req, res, next) {
        try {
            const doc = await candidateModel.findOneAndUpdate(
            { _id : req.params.candidateId },
            { candidate_firstname : req.body.candidate_firstname },
            { new : true },
            )   
            res.send(doc)
        }
        catch (error) {
            res.status(500).json({ message : err.message })
        }
        next()
    })

    .post('/:candidateId', async function (req, res, next) {
        const cnd = new candidateModel(req.body)
        try {
            const inscnd = await cnd.save()
            res.send(cnd)
        }
        catch (error) {
            res.status(400).json({message : err.message})
        }
        next()
    })

    .post('/:candidateId/note', async (req, res, next) => {
        const clean = sanitizeHtml(req.body.description)
        const note = new candidateNoteModel({
            description : clean,
            candidate_id: req.params.candidateId
        })
        try {
            const result = await note.save()
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    next()

})

    module.exports = c_router
