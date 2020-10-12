const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
    state: { type: String, required: [true, "State is required"] },
    phoneNumber: { type: String, required: [true, "State is required"] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
