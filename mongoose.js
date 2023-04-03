const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/Arezoo-Learning"
const db = mongoose.connection

async function mConnect() {
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
    const con = mongoose.connection.readyState//it shows mongoose is connected to DB
    console.log('mongoose connection.readyStat is :',con)
}

module.exports = {mConnect, db}
