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
   
module.exports = {
  user_list_get,
  user_get,
};