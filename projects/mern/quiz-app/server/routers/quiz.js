const express = require("express");
const Quiz = require("../models/quiz");
const User = require("../models/user");
const auth = require("../middlewares/auth");
const { update } = require("../models/user");
const router = new express.Router();

router.post("/quiz", auth, async (req, res) => {
  const quiz = new Quiz({
    ...req.body,
    quizAuthor: req.user._id,
  });
  try {
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/quiz", auth, async (req, res) => {
  try {
    // const quiz = await req.user.populate("quizzes").execPopulate();
    // res.json(quiz.quizzes);

    const quizes = await Quiz.find({});
    res.json(quizes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/quizes", async (req, res) => {
  try {
    const quizes = await Quiz.find();
    res.send(quizes);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/quiz/me", auth, async (req, res) => {
  try {
    const quiz = await req.user.populate("quizzes").execPopulate();
    res.json(quiz.quizzes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/quiz/:id", auth, async (req, res) => {
  try {
    const quizId = req.params.id;
    const quiz = await Quiz.findById({ _id: quizId, quizAuthor: req.user._id });
    if (!quiz) {
      res.status(404).json();
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch("/quiz/:id", auth, async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      "quizTitle",
      "quizDescription",
      "quizCategory",
      "quizType",
      "quizDifficulty",
      "quizQuestions",
      "quizDate",
    ];
    const isValidUpdate = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidUpdate) {
      throw new Error("Invalid update!");
    }

    const quiz = await Quiz.findOne({
      _id: req.params.id,
      quizAuthor: req.user._id,
    });

    if (!quiz) {
      res.status(404).json();
    }

    updates.forEach((update) => (quiz[update] = req.body[update]));
    await quiz.save();
    res.json(quiz);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/quiz/:id", auth, async (req, res) => {
  try {
    const quiz = await Quiz.findOne({
      _id: req.params.id,
      quizAuthor: req.user._id,
    });
    if (!quiz) {
      res.status(404).json({ messsage: "Quiz was not found!" });
    }
    await quiz.remove();
    res.json({ message: "Quiz was deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
