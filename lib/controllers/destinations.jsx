const { Router } = require('express');

const Destination = require('../models/Destination');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const destinations = await Destination.getDestinations();
    res.json(destinations);
  } catch (e) {
    next(e);
  }
});
