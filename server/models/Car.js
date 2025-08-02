const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  image: String, // image URL
  description: String,
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Car", carSchema);
