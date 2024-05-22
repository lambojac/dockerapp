const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv=require("dotenv")
dotenv.config()
const app = express();
const port = 3001;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes
app.use('/users', require('./routes'));
app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});
