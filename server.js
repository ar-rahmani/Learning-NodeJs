const express = require('express');
const app = express();

//in post request if I want to access to req.body, I should first add yhis line
app.use(express.json());
//app.use('router',router)


app.get('/', (req, res) => {
    res.send('Got a GET request'); 
});

app.post('/', (req, res) => {
    res.send('Got a POST request'); 
});

app.get('/ping', (req, res) => { 
       res.cookie('name', 'ar-coockie', { domain: '.example.com', path: '/ping', secure: true, httpOnly: true })
    res.json({ pong: 1 })
});

app.get('/info', (req, res) => { 
    console.log(req.protocol)
    console.log(req.hostname)
    console.log(req.path)
    console.log(req.method)
    ///???does not show in response??
    res.send('Protocol is :',req.protocol)
    res.send('Host name is :',req.hostname)
    res.send('path is :', req.path)
    res.send('method is :', req.method)
    res.send('Status Code is :',res.statusCode)
    res.send('Status Message is :',res.statusMessage) 
    
});

app.listen(12345, () => console.log('My App is listening on port 12345.'));