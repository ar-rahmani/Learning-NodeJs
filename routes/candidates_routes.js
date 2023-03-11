const express = require('express')
const c_router = express.Router()

c_router
    .get("/:candidateId", (req, res,next) => {
       console.log("Recieved a GET request")
        res.send(req.params)
        next()
    })

    .post("/:candidateId", (req, res,next) => {
       console.log('Recieved a POST request')
        res.send(req.params)
        next()
    })

module.exports = c_router
