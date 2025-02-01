const mongoose = require("mongoose");
const User = require("../models/userModel");

// Getting All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching users", error: err.message });
  }
};

// Create a User
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ msg: "Name and email are required" });
    }
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ msg: "User created successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error creating user", error: err.message });
  }
};

// Delete a User
exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ msg: "User not found" });
      }
      res.status(200).json({ msg: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ msg: "Error deleting user", error: err.message });
    }
  };
  