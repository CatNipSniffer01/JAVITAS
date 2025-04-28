const express = require('express');
const router = express.Router();
const { User } = require('../models');

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/users
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

// PUT /api/users/:id
router.put('/:id', async (req, res) => {
  const [updated] = await User.update(req.body, {
    where: { id: req.params.id }
  });
  if (updated) {
    const updatedUser = await User.findByPk(req.params.id);
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// DELETE /api/users/:id
router.delete('/:id', async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: 'User deleted' });
});

module.exports = router;