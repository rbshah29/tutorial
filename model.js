const mongoose = require('mongoose');

function generateUniqueId() {
    const timestamp = new Date().getTime();
    return `USER${timestamp}`;
  }
  
  const userSchema = new mongoose.Schema({
    _id: { type: String, default: () => generateUniqueId() },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String}
  });
  
  const userModel = mongoose.model('users', userSchema);
  
  module.exports = { userModel };