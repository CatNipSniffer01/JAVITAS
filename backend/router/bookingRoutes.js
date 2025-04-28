const express = require('express');
const router = express.Router();
const { Booking, User, Animal } = require('../models');

// POST /api/bookings
router.post('/', async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/bookings
router.get('/', async (req, res) => {
  const bookings = await Booking.findAll({
    include: [User, Animal]
  });
  res.json(bookings);
});

// GET /api/bookings/:id
router.get('/:id', async (req, res) => {
  const booking = await Booking.findByPk(req.params.id, {
    include: [User, Animal]
  });
  res.json(booking);
});

// PUT /api/bookings/:id
router.put('/:id', async (req, res) => {
  const [updated] = await Booking.update(req.body, {
    where: { id: req.params.id }
  });
  if (updated) {
    const updatedBooking = await Booking.findByPk(req.params.id, {
      include: [User, Animal]
    });
    res.json(updatedBooking);
  } else {
    res.status(404).json({ error: 'Booking not found' });
  }
});

// DELETE /api/bookings/:id
router.delete('/:id', async (req, res) => {
  await Booking.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Booking deleted' });
});

module.exports = router;
