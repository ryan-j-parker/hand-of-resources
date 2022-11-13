const { Router } = require('express');
const { reset } = require('nodemon');

const Gang = require('../models/Gang');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const gang = await Gang.getGangById(req.params.id);
      res.json(gang);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const gangs = await Gang.getGangs();
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
      await Gang.delete(req.params.id);
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }
  });
