const { Router } = require('express');

const Zodiac = require('../models/Zodiac');

module.exports = Router()
.get('/', async (req, res, next) => {
  try {
    const zodiac = await Zodiac.getZodiac();
    res.json(zodiac);
  } catch (e) {
    next(e);
  }
});
