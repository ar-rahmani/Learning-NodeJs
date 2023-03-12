

const logger =  function (req, res, next) {
    console.log('Requested URL :', req.originalUrl)
    console.log('Requested Method :', req.method)
    next()
}

module.exports = logger