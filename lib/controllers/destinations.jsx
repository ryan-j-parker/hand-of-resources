const { Router } = require('express');

const Destination = require('../models/Destination');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const destination = await Destination.getDestinationById(req.params.id);
      res.json(destination);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const destinations = await Destination.getDestinations();
      res.json(destinations);
    } catch (e) {
      next(e);
    }
  });
