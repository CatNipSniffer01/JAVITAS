const sequelize = require('../config/database');
const User = require('./User');
const Animal = require('./Animal');
const Booking = require('./Booking');
const Payment = require('./Payment');

// Define relationships
User.hasMany(Booking);
Booking.belongsTo(User);

User.hasMany(Payment);
Payment.belongsTo(User);

Animal.hasMany(Booking);
Booking.belongsTo(Animal);

Booking.hasOne(Payment);
Payment.belongsTo(Booking);

// Sync models
sequelize.sync({ alter: true })
  .then(() => console.log('MySQL tables synced'))
  .catch((err) => console.error('Sequelize sync error:', err));

module.exports = { sequelize, User, Animal, Booking, Payment };
