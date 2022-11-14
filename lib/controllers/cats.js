const { Router } = require('express');

const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const cat = await Cat.getById(req.params.id);
      res.json(cat);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const cats = await Cat.getAll();
      res.json(cats);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const cat = await Cat.insert(req.body);
      res.json(cat);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const newCat = await Cat.update(req.params.id, req.body);
      res.json(newCat);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      res.send(await Cat.delete(req.params.id));
      res.status(200);
    } catch (e) {
      next(e);
    }
  });
