const express = require('express');
const database = require('../db/Database')

const projectRouter = express.Router();

projectRouter.get('/', (req, res, next) => {
  database.readAll('projects').then(events => {
    res.json(events)
  }).catch(err => console.log(err));
});

module.exports = projectRouter
