const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('renting', 'CatNipSniffer', '12345', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
