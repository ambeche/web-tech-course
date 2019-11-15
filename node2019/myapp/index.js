'use strict'

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hellow from my Node server!'));

app.get('/demo', (req, res) => {
    console.log('request', req);
    res.send('demo')});

app.listen(port, () => console.log(`server app started, listening on port ${port}!`));
