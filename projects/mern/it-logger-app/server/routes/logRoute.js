const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Log = require("../models/Log");

router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({
      date: -1
    });
    res.json(logs);
  } catch (err) {
    console.error(err.message);
  }
});

router.post(
  "/",
  [
    check("message", "Please add a message")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array });
    }
    const { message, attention, tech } = req.body;
    try {
      const log = new Log({
        message,
        attention,
        tech
      });
      await log.save();
      res.json(log);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.put(
  "/:id",
  [
    check("message", "Please add a message")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array });
    }
    const { message, attention, tech, date } = req.body;
    try {
      const log = {
        _id: req.params.id,
        message,
        attention,
        tech,
        date: new Date()
      };
      await Log.findByIdAndUpdate(req.params.id, log);
      res.json(log);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.delete("/:id", async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array });
  }
  const id = req.params.id;
  try {
    await Log.findByIdAndDelete(id);
  } catch (err) {
    console.error(err.message + "a");
    res.status(500).send("Server Error");
  }
});

module.exports = router;
