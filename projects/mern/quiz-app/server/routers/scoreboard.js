const express = require("express");
const Scoreboard = require("../models/scoreboard");
const auth = require("../middlewares/auth");
const router = new express.Router();

const savePoint = router.post("/scoreboard", auth, async (req, res) => {
  try {
    const scoreboard = new Scoreboard({
      ...req.body,
      solvedBy: req.user._id,
    });
    await scoreboard.save();
    res.send(scoreboard);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
