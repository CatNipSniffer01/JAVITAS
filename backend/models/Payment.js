const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Booking = require('./Booking');

const Payment = sequelize.define('Payment', {
  amount: { type: DataTypes.FLOAT, allowNull: false },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'pending'
  },
  paymentDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true
});

// Associations
Payment.belongsTo(User);
Payment.belongsTo(Booking);

module.exports = Payment;
