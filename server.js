const express = require('express');
const candidates_routes = require('./routes/candidates_routes.js')
const ping_routes = require('./routes/ping_pong_routes')

const app = express();

app.use('/candidates', candidates_routes)
app.use('/ping_pong', ping_routes)



app.listen(12345, () => console.log('My App is listening on port 12345.'));