const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    unique: true,
    required: true
  }
},{
  timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;