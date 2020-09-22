const express = require('express');
const database = require('../db/Database')

const videoRouter = express.Router();

videoRouter.get('/', (req, res, next) => {
  database.readAll('videos').then(events => {
    res.json(events)
  }).catch(err => console.log(err));
});

module.exports = videoRouter
