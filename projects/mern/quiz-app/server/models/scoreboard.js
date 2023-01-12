const mongoose = require("mongoose");

const scoreboardSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Quiz",
  },
  correct: {
    type: Number,
    default: 0,
  },
  incorrect: {
    type: Number,
    default: 0,
  },
  empty: {
    type: Number,
    default: 0,
  },
  solvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Scoreboard = mongoose.model("Scoreboard", scoreboardSchema);

module.exports = Scoreboard;
