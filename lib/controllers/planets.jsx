const { Router } = require('express');

const Planet = require('../models/Planet');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const planets = await Planet.getPlanets();
    res.json(planets);
  } catch (e) {
    next(e);
  }
});
