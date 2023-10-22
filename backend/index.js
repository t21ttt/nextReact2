// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Allow cross-domain requests
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
// Connect to MongoDB

const url = 'mongodb://0.0.0.0:27017/Student';
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected successfully');
  } catch (err) {
    console.log(err);
  }
};

connectDB();

// Routes
app.use('/', dataRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});