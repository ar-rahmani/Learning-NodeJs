const express = require('express');
const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Got a GET request'); 
});

app.post('/', (req, res) => {
    res.send('Got a POST request'); 
});

app.get('/ping', (req, res) => { 
    res.json({ pong: 1 })
});

app.get('/info', (req, res) => { 
    console.log(req.protocol)
    console.log(req.hostname)
    console.log(req.path)
    console.log(req.method)
});

app.listen(12345, () => console.log('My App is listening on port 12345.'));