const express = require('express');
const database = require('../db/Database')

const eventRouter = express.Router();

eventRouter.get('/', (req, res, next) => {
  database.readAll('events').then(events => {
    res.statusCode = 200
    res.json(events)
  }).catch(err => {
    res.statusCode = 400
    res.json({'status': res.statusCode, 'message': 'Something went wrong'})
  });
});

eventRouter.get("/top3", (req, res, next) => {
  database
    .readTop("events", 3)
    .then(events => {
      res.status(200).json(events);
    })
    .catch(err => console.log(err));
});

eventRouter.get('/:id', (req, res, next) => {
  database.readOne('events', req.params.id).then(event => {
    res.statusCode = 200
    res.json(event)
  }).catch(err => {
    res.statusCode = 404
    res.json({'status': res.statusCode, 'message': 'Event not found'})
  });
});

eventRouter.post('/add', (req, res, next) => {
  database.createOrUpdate('events', req.body).then(event => {
    res.statusCode = 201
    res.json({'status': res.statusCode, 'message': 'Event created successfully'})
  }).catch(err => {
    res.statusCode = 400
    res.json({'status': res.statusCode, 'message': 'Event not created'})
  })
})

eventRouter.delete('/remove/:id', (req, res, next) => {
  database.delete('events', req.params.id).then(event => {
    res.statusCode = 200
    res.json({'status': res.statusCode, 'message': 'Event deleted successfully'})
  }).catch(err => {
    res.statusCode = 404
    res.json({'status': res.statusCode, 'message': 'Event does not exist, so it cannot be deleted'})
  })
})

eventRouter.put('/update/:id', (req, res, next) => {
})

module.exports = eventRouter
