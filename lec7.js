// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch(err => {
  console.log("Failed to connect to MongoDB", err);
});

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create User model
const User = mongoose.model('User', userSchema);

// POST endpoint to add a new user
app.post('/add-user', async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Create a new user
    const newUser = new User({ name, email, age });
    await newUser.save();

    res.status(201).json({
      message: 'User added successfully!',
      user: newUser
    });
  } catch (error) {
    res.status(400).json({ message: 'Error adding user', error });
  }
});

// GET endpoint to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

// DELETE endpoint to delete a user by name
app.delete('/users/name/:name', async (req, res) => {
  try {
    const { name } = req.params;

    // Find and delete the user by name
    const deletedUser = await User.findOneAndDelete({ name });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User deleted successfully',
      user: deletedUser
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user by name', error });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
