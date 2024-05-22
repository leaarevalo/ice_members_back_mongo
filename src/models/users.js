const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Users", usersSchema);
