const express = require('express');
//const mongoose = require('mongoose')

const candidates_routes = require('./routes/candidates_routes')
const ping_routes = require('./routes/ping_pong_routes')
const m_candidate = require('./routes/m_candidate')
const logger_middleware = require('./middleware/loggerMiddleware')
const { connect } = require('./mongo')
const {mConnect} = require('./mongoose')
//const url = "mongodb://localhost:27017/Arezoo-Learning"


const app = express();
app.use(express.json());
app.use(logger_middleware)
app.use('/candidates', candidates_routes)
app.use('/ping_pong', ping_routes)
app.use('/api', m_candidate)

async function main() {
    //await connect()//mongodb
    await mConnect() //mongoos
    app.listen(12345, () => console.log('My App is listening on port 12345.'));

}

main()