const express = require("express");
const Technician = require("../models/Technician");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const technicians = await Technician.find().sort({ date: -1 });
    res.json(technicians);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;
  try {
    const newTechnician = new Technician({
      firstName,
      lastName,
      email,
      phone
    });
    await newTechnician.save();
    res.json(newTechnician);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Technician.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
