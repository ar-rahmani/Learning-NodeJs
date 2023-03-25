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
    
    .get('/:candidateId', async function(req, res, next) {
        const collection = database.db.collection("candidate")
        const o_id  = req.params.candidateId
        const item = await collection.findOne({ candidateId: o_id })
        // if (item) {
        //     console.log(item)
        //     res.send(item)   
        // }
        // else {
        //     console.log('Not found')
        //     res.status(404).send('Not found')
        // }
        return (item) ? res.send(item) : res.status(404).send('Not found')
                
        next()
    })

    .post('/:candidateId', async function (req, res, next) {  
        const collection = database.db.collection("candidate")
        const rest = await collection.insertOne(req.body);
        res.send(req.body)
        next()
    })

    module.exports = c_router
