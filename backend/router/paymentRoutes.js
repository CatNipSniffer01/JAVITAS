const express = require('express');
const router = express.Router();
const { Payment, User, Booking } = require('../models');

// POST /api/payments
router.post('/', async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/payments
router.get('/', async (req, res) => {
  const payments = await Payment.findAll({
    include: [User, Booking]
  });
  res.json(payments);
});

// GET /api/payments/:id
router.get('/:id', async (req, res) => {
  const payment = await Payment.findByPk(req.params.id, {
    include: [User, Booking]
  });
  res.json(payment);
});

// PUT /api/payments/:id
router.put('/:id', async (req, res) => {
  const [updated] = await Payment.update(req.body, {
    where: { id: req.params.id }
  });
  if (updated) {
    const updatedPayment = await Payment.findByPk(req.params.id, {
      include: [User, Booking]
    });
    res.json(updatedPayment);
  } else {
    res.status(404).json({ error: 'Payment not found' });
  }
});

// DELETE /api/payments/:id
router.delete('/:id', async (req, res) => {
  await Payment.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Payment deleted' });
});

module.exports = router;
