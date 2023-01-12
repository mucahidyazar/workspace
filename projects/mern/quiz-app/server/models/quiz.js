const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quizImage: {
    type: Buffer,
  },
  quizTitle: {
    type: String,
    required: true,
  },
  quizDescription: {
    type: String,
    default: "Welcome to my quiz",
  },
  quizCategory: {
    type: String,
    default: "general",
  },
  quizType: {
    type: String,
    default: "multiple",
  },
  quizDifficulty: {
    type: String,
    default: "easy",
  },
  quizQuestions: {
    type: Array,
    required: true,
  },
  quizDate: {
    type: Date,
    default: new Date(1991 - 01 - 01),
  },
  quizAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
