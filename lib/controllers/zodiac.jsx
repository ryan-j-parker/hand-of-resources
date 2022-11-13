const { Router } = require('express');

const Zodiac = require('../models/Zodiac');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const rat = await Zodiac.getZodiacById(req.params.id);
      res.json(rat);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const zodiac = await Zodiac.getZodiac();
      res.json(zodiac);
    } catch (e) {
      next(e);
    }
  });
