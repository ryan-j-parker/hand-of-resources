const { Router } = require('express');

const Planet = require('../models/Planet');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const planet = await Planet.getById(req.params.id);
      res.json(planet);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const planets = await Planet.getAll();
      res.json(planets);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const planet = await Planet.insert(req.body);
      res.json(planet);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const planet = await Planet.update(req.params.id, req.body);
      res.json(planet);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      res.send(await Planet.delete(req.params.id));
      res.status(200);
    } catch (e) {
      next(e);
    }
  });
