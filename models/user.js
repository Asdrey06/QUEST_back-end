const mongoose = require("mongoose");

const addressShema = mongoose.Schema({
  address: String,
  city: String,
  zipcode: Number,
});

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  birthday: Date,
  addresses: [addressShema],
  photo: String,
  username: String,
  email: String,
  password: String,
  token: String,
  status: String,
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "requests" }],
  finishedrequests: [
    { type: mongoose.Schema.Types.ObjectId, ref: "finishedrequests" },
  ],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
