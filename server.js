const express = require('express');
const candidates_routes = require('./routes/candidates_routes.js')
const ping_routes = require('./routes/ping_pong_routes')
const logger_middleware = require('./middleware/loggerMiddleware')


const app = express();
app.use(express.json());
app.use(logger_middleware)
app.use('/candidates', candidates_routes)
app.use('/ping_pong', ping_routes)



app.listen(12345, () => console.log('My App is listening on port 12345.'));