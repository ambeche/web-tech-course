'use strict';
const userModel = require('../models/userModel');
const users = userModel.users;

users.map(val => delete val.password);

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
    res.json(users.filter(val => val.id == req.params.id));
};

const user_create_post = (req, res, next) => {
    console.log('Data sent', req.body);
    res.send('With this endpoint you can add users.');
    next()
  };
   
module.exports = {
  user_list_get,
  user_get,
  user_create_post,
};