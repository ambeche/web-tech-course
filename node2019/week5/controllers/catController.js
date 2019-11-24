'use strict';
const catModel = require('../models/catModel');

const cat_list_get = async (req, res) => {
    const cats = await catModel.getAllCats();
    await res.json(cats);
  };

  const cat_get = async (req, res) => {
    const params = [req.params.id];
    const cat = await catModel.getCat(params);
    await res.json(cat);
  };

const cat_create_post = async (req, res) => {
  const params = [
  req.body.name,
  req.body.age,
  req.body.weight,
  req.body.owner,
  req.file.filename,
];
const response = await catModel.addCat(params);
await res.json(response);
};
   
module.exports = {
  cat_list_get,
  cat_create_post,
  cat_get,
};