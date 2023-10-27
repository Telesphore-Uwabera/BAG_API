const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const simulationRoutes = require('./routes/simulationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'your-mongodb-uri';
const JWT_SECRET = '91073@Tecy';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/simulations', simulationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
