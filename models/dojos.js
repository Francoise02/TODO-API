const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },

  is_completed: {
      type: boolean,
      required: true,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;