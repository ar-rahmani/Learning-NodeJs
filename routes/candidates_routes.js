const express = require('express')
const bodyparser = require('body-parser')
const mongodb = require('mongodb')

const { database } = require('../mongo')
const c_router = express.Router()

c_router
    .get('/retrieve', async function(req, res, next) {
        const collection = database.db.collection("candidate")
        const items = await collection.find({}).toArray()
        res.send(items)
        next()
    }) 
    
    .post('/:candidateId', async function (req, res, next) {  
        const collection = database.db.collection("candidate")
        const rest = await collection.insertOne(req.body);
        res.send(req.body)
        next()
    })

    module.exports = c_router
