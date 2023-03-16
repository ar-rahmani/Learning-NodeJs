const express = require('express')
const mongodb = require('mongodb')

const { database } = require('../mongo')
const c_router = express.Router()

c_router
    .get('/:candidateId',function(req, res, next) {
    let a1 =req.method
    let a2 = req.params
    res.send(`uri is : ${a2} \n method is : ${a1} `)
    console.log(database.db)
     }) 
    
    .post('/:candidateId', async function (req, res, next) {  
        const collection = database.db.collection("candidate")
        const rest = await collection.insertOne(req.body);
        res.send(req.body)
        next()
    })

    module.exports = c_router
