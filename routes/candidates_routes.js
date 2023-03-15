const express = require('express')
const c_router = express.Router()

c_router
    .get('/:candidateId', (req, res, next) => {
    let a1 =req.method
    let a2 = req.params
        res.send(`uri is : ${a2} \n method is : ${a1} `)
        next()
    }) 
    
    .post('/:candidateId', (req, res, next) => {
        res.send(req.body)
        next()
})  

module.exports = c_router
