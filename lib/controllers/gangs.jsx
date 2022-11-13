const { Router } = require('express');

const Gang = require('../models/Gang');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const gangs = await Gang.getGangs();
      res.json(gangs);
    } catch (e) {
      next(e);
    }
  });
