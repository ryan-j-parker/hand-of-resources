const { Router } = require('express');

const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const cat = await Cat.getCatById(req.params.id);
      res.json(cat);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const cats = await Cat.getCats();
    res.json(cats);
  });
