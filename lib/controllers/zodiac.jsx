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
  })
  .post('/', async (req, res, next) => {
    try {
      const zodiac = await Zodiac.insert(req.body);
      res.json(zodiac);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const newZodiac = await Zodiac.update(req.params.id, req.body);
      res.json(newZodiac);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      await Zodiac.delete(req.params.id);
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }
  });
