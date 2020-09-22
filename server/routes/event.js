const express = require('express');
const database = require('../db/Database')

const event = express.Router();

event.get('/', (req, res, next) => {
  database.readAll('events').then(events => {
    res.json(events)
  }).catch(err => console.log(err));
});

module.exports = event
