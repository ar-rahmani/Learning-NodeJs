const express = require('express')
const p_router = express.Router()
const logger_middleware = require('../middleware/loggerMiddleware')

p_router.use(logger_middleware)    

module.exports = p_router