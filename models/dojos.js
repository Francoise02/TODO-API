const mongoose = require("mongoose");
// const { boolean } = require("webidl-conversions");

const taskSchema = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true,
  // },
  task: {
    type: String,
    required: true,
  },

  is_completed: {
      type: Boolean,
      required: true,
  }
});

const task = mongoose.model("Task", taskSchema);

module.exports = task;