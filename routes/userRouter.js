const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      const { walletAddress, userName } = req.body;
      const existingUser = await User.findOne({walletAddress: walletAddress });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists with that Wallet Address' });
      }
      const newUser = new User({
        walletAddress,
        userName
      });
     const response = await newUser.save();
      res.status(201).json({ message: 'User registered successfully', response });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  router.post('/login', async (req, res) => {
    try {
      const { walletAddress, userName } = req.body;
      const user = await User.findOne({ walletAddress: walletAddress, userName: userName });
    
      if (!user) {
        return res.status(404).json({ message: 'Invalid credentials' });
      }
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  
  module.exports = router;