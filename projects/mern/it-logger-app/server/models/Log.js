const mongoose = require("mongoose");

const LogSchema = mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  attention: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  },
  tech: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("log", LogSchema);
