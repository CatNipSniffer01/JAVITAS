const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Animal = sequelize.define('Animal', {
  name: { type: DataTypes.STRING, allowNull: false },
  species: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  rentalPricePerDay: { type: DataTypes.FLOAT, allowNull: false },
  imageUrl: { type: DataTypes.STRING },
  availabilityStatus: {
    type: DataTypes.ENUM('available', 'booked', 'unavailable'),
    defaultValue: 'available'
  }
}, {
  timestamps: true
});

module.exports = Animal;
