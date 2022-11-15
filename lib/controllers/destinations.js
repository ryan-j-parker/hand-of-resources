const { Router } = require('express');

const Destination = require('../models/Destination');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const destination = await Destination.getById(req.params.id);
      res.json(destination);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const destinations = await Destination.getAll();
      res.json(destinations);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const destination = await Destination.insert(req.body);
      res.json(destination);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedDest = await Destination.update(req.params.id, req.body);
      res.json(updatedDest);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      res.send(await Destination.delete(req.params.id));
      res.status(200);
    } catch (e) {
      next(e);
    }
  });
