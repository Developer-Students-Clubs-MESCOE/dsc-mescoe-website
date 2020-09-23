const express = require('express');
const database = require('../db/Database')

const event = express.Router();

event.get('/', (req, res, next) => {
  database.readAll('events').then(events => {
    res.statusCode = 200
    res.json(events)
  }).catch(err => {
    res.statusCode = 400
    res.json({'status': res.statusCode, 'message': 'Something went wrong'})
  });
});

event.get('/:id', (req, res, next) => {
  database.readOne('events', req.params.id).then(event => {
    res.statusCode = 200
    res.json(event)
  }).catch(err => {
    res.statusCode = 404
    res.json({'status': res.statusCode, 'message': 'Event not found'})
  });
});

event.post('/add', (req, res, next) => {
  database.createOrUpdate('events', req.body).then(event => {
    res.statusCode = 201
    res.json({'status': res.statusCode, 'message': 'Event created successfully'})
  }).catch(err => {
    res.statusCode = 400
    res.json({'status': res.statusCode, 'message': 'Event not created'})
  })
})

event.delete('/remove/:id', (req, res, next) => {
  database.delete('events', req.params.id).then(event => {
    res.statusCode = 200
    res.json({'status': res.statusCode, 'message': 'Event deleted successfully'})
  }).catch(err => {
    res.statusCode = 404
    res.json({'status': res.statusCode, 'message': 'Event does not exist, so it cannot be deleted'})
  })
})

event.put('/update/:id', (req, res, next) => {
})

module.exports = event
