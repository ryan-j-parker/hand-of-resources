const { Router } = require('express');
const { request } = require('../app');

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
  });
