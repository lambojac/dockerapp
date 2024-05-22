const express = require('express');
const router = express.Router();
const User = require('./models');

// Create a user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
