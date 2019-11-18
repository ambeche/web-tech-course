'use strict';


//console.log('my powerful app.');
const connection = require('./model/db.js');

const express = require('express');

const port = 3000;
const app = express();

app.use(express.static('public'));

app.get('/busstop', async (req, res) => {
    try{
        const [results, fields] = await connection.query(
                'SELECT * FROM busschedule.busstop');

                        console.log(results);
                        console.log(fields);
                        res.json(results);
} catch (e) {
        console.log(e);
        res.send('db error :(');
}


});

app.listen(3000, () => {
	console.log('server app start?');
});
