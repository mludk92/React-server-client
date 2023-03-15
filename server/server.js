//start with npm run server

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const creatureRouter = require('./routes/creature.router.js');
const PORT = process.env.PORT || 5012;
//!if you change this port you must update package json

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/creature', creatureRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});