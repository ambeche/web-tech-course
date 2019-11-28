'use strict';

const express = require('express');
const busstop = require('./model/busstop');

const app = express();

if(process.env.SERVER === 'dev_localhost') {
  require('./secure/localhost')(app);
} else {
  require('./secure/server')(app);
  app.listen(3000, () => {
    console.log('server app start?');
  });
}
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
  if(req.secure) {
    res.send('Hello secure');
  } else {
    res.send('Hello form my Node server unsecure');
  }
});

app.get('/demo', (req, res) => {
  console.log('request', req);
  res.send('demo');
});

