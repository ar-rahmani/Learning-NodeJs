

const logger = async function (req, res, next) {
    console.log('Requested URL :', req.originalUrl)
    console.log('Requested Method :', req.method)
    let a1 =req.method
    let a2 = req.originalUrl
    res.send(`uri is : ${a2} \n method is : ${a1} `)
    next()
}

module.exports = logger