//get /admin/users
//get /admin/user/:id
//delete /admin/users
//get /admin/quizes
//get /admin/quiz/:id
//delete /admin/quizes

//delete /admin/:id/all-session
//delete /admin/all-session

const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const Quiz = require("../models/quiz");
const adminAuth = require("../middlewares/admin");

router.get("/admin/users", adminAuth, async (req, res) => {
  try {
    const users = await User.find({});

    if (!users) {
      res.status(404).json({ message: "There is no user!" });
    }

    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/admin/user/:id", adminAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json("There is no user!");
    }
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/admin/user/:id", adminAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res
        .status(404)
        .json({ message: "There is no user that you want to delete!" });
    }
    await user.remove();
    res.json({ message: "This user was deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/admin/users", adminAuth, async (req, res) => {
  try {
    const deletedUsers = await User.countDocuments({ admin: false });
    await User.deleteMany({ admin: false });
    res.json({ message: `${deletedUsers} users was deleted` });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/admin/quizes", adminAuth, async (req, res) => {
  try {
    const quizes = await Quiz.find({});
    if (!quizes) {
      res.status(404).json({ message: "There is no quiz!" });
    }
    res.json(quizes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/admin/quiz/:id", adminAuth, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      res.status(404).json({ message: "There is no quiz!" });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/admin/quizes", adminAuth, async (req, res) => {
  try {
    await Quiz.collection.drop();
    res.json({ message: "Quiz collection was dropped." });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/admin/quiz/:id", adminAuth, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      res.status(404).json({ message: "There is no quiz!" });
    }
    await quiz.remove();
    res.json({ message: "Quiz was deleted successfully." });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/admin/:id/all-sessions", adminAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.tokens = [];
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/admin/all-sessions", adminAuth, async (req, res) => {
  try {
    const users = await User.updateMany({}, { tokens: [] });
    res.json({ mesage: "All sessions were deleted successfully!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
