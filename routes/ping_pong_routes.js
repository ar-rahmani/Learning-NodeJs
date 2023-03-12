const express = require('express')
const p_router = express.Router()

p_router
    .get("/", (req, res,next) => {
        res.json({ pong: 1 })
        next()
    })

    .post("/", (req, res,next) => {
        res.json({ pong: 1 })
        next()
})

module.exports = p_router