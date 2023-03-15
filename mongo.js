const mongodb = require('mongodb')
const database = { db: null }
const url = "mongodb://localhost:27017/Arezoo-Learning"

async function connect() {
    const client = new mongodb.MongoClient(url)
    await client.connect()
    database.db = client.db()
}

module.exports = {connect,database}
