'use strict';

const express = require('express');
const busstop = require('./model/busstop');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.get('/busstop', async (req, res) => {
  try {
    res.json(await busstop.getAll());
  } catch (e) {
    console.log(e);
    res.send('db error :(');
  }
});

app.get('/busstop', async (req, res) => {
  console.log(req.query);
  try {
    res.json(await busstop.search(req.query.name));
  } catch(e) {
    res.send(`db error`);
  }
});

app.post('/busstop', bodyParser.urlencoded({extended: true}), async (req, res) => {
  console.log(req.body);
  try {
    res.json(await busstop.insert(req.body.name));
  } catch (e) {
    console.log(e);
    res.send('db error');
  }
});

app.get('/', (req, res) => {
  res.send('Hello form my Node server');
});

app.get('/demo', (req, res) => {
  console.log('request', req);
  res.send('demo');
});

app.listen(3000, () => {
  console.log('server app start?');
});