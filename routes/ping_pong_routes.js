const express = require('express')
const p_router = express.Router()

p_router
    .get('/', (req, res, next) => {
    let a1 =req.method
        let a2 = req.params
        console.log(a2)
    res.send(`uri is : ${a2} \n method is : ${a1} `)
     next() 
    })  

     .post('/', (req, res, next) => {
         res.send(req.body)
        next() 
     }) 

module.exports = p_router