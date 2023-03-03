const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Home'); 
});

app.get('/ping', (req, res) => { 
    res.send('{ pong: 1 }')
});




app.listen(12345, () => console.log('My App is listening on port 12345.'));