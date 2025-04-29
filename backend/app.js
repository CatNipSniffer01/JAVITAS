const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { sequelize } = require('./models'); // Sequelize connection

app.use(bodyParser.json());

// Import routes
const userRoutes = require('./router/userRoutes');
const animalRoutes = require('./router/animalRoutes');
const bookingRoutes = require('./router/bookingRoutes');
const paymentRoutes = require('./router/paymentRoutes');
const cors = require('cors');

// Mount route modules
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/animals', animalRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);


const PORT = process.env.PORT || 3000;
sequelize.sync({ alter: false })
  .then(() => {
    console.log('✅ Database synced');
    app.listen(3000, () => {
      console.log('🚀 Server listening on http://localhost:3000');
    });
  })
  .catch(err => console.error('❌ Sync error:', err));

