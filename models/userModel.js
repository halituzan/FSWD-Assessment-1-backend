const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  address: {
    type: Object,
  },
  phone: String,
  website: String,
  company: {
    type: Object,
  },
});

module.exports = mongoose.model("users", userSchema);
