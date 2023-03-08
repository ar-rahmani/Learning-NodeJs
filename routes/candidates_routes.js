const express = require('express')
const logger = require('../middleware/loggerMiddleware.js')
const c_router = express.Router()
const logger_middleware = require('../middleware/loggerMiddleware')

c_router.use(logger_middleware)

module.exports = c_router
