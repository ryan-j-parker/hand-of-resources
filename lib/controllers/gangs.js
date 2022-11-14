const { Router } = require('express');

const Gang = require('../models/Gang');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const gang = await Gang.getById(req.params.id);
      res.json(gang);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const gangs = await Gang.getAll();
      res.json(gangs);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const gang = await Gang.insert(req.body);
      res.json(gang);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const newGang = await Gang.update(req.params.id, req.body);
      res.json(newGang);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      res.send(await Gang.delete(req.params.id));
      res.status(200);
    } catch (e) {
      next(e);
    }
  });
