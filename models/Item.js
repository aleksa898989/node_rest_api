const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "You must provide title"],
    trim: true,
    maxlength: [25, "Title is 25 characters max"],
  },
});

module.exports = mongoose.model("Item", Schema);
