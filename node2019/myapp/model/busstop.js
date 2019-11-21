'use strict';

const connection = require('./db');

exports.getAll = async () => {
  try {
    const [results, fields] = await connection.query('SELECT * FROM busstop');
    console.log(results); // results contains rows r
    console.log(fields); // fields contains extra m
    return results;
  } catch (e) {
    console.log(e);
    throw 'db error :(';
  }
};

exports.search = async (name) => {
  try {
    const [results] = await connection.query(
      'SELECT * FROM busstop WHERE name LIKE ?',
      [name]);
    return results;
  } catch(e) {
    console.log(e);
    throw `db error`;
  }
};

exports.insert = async (name) => {
  try {
    const [result] = await connection.query(
      'INSERT INTO busstop  (name) VALUES (?)',
      [name]
    );
    return result;
  } catch (e) {
    console.log(e);
    throw('db error');
  }

};
