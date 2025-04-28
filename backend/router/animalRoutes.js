const express = require('express');
const router = express.Router();
const { Animal } = require('../models');

// POST /api/animals
router.post('/', async (req, res) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/animals
router.get('/', async (req, res) => {
  const animals = await Animal.findAll();
  res.json(animals);
});

// GET /api/animals/:id
router.get('/:id', async (req, res) => {
  const animal = await Animal.findByPk(req.params.id);
  res.json(animal);
});

// PUT /api/animals/:id
router.put('/:id', async (req, res) => {
  const [updated] = await Animal.update(req.body, {
    where: { id: req.params.id }
  });
  if (updated) {
    const updatedAnimal = await Animal.findByPk(req.params.id);
    res.json(updatedAnimal);
  } else {
    res.status(404).json({ error: 'Animal not found' });
  }
});

// DELETE /api/animals/:id
router.delete('/:id', async (req, res) => {
  await Animal.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Animal deleted' });
});

module.exports = router;
