'use strict';
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('With this endpoint you can get a cat ');
  });

router.get('/:id', (req, res) => {
  res.send('You reqested a cat whose id is ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('With this endpoint you can add cats.');
});

router.put('/', (req, res) => {
  res.send('With this endpoint you can modify cats.');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete cats.');
});

module.exports = router;