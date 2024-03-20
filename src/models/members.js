const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  name: String,
  lastName: String,
  phone: String,
  dateOfBirth: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Members", memberSchema);
