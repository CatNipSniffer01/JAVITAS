const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');    // make sure these models exist
const Animal = require('./Animal');

const Booking = sequelize.define('Booking', {
  startDate: { type: DataTypes.DATE, allowNull: false },
  endDate: { type: DataTypes.DATE, allowNull: false },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'canceled'),
    defaultValue: 'pending'
  }
}, {
  timestamps: true
});

// Associations (defined later in main sync file)
Booking.belongsTo(User);
Booking.belongsTo(Animal);

module.exports = Booking;
