const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const auth = require("../middlewares/auth");
const User = require("../models/user");
const router = new express.Router();

router.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/user/me", auth, async (req, res) => {
  res.json({ user: req.user, token: req.token });
});

router.patch("/user/me", auth, async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      "firstName",
      "lastName",
      "birthday",
      "newsLetter",
      "username",
      "email",
      "password",
    ];
    const isValidUpdate = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidUpdate) {
      throw new Error("Invalid update!");
    }

    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/user/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.json({ message: "You logouted successfully!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/user/logout-all", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.json({ messsage: "You logouted all of your sessions!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/user/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.json({ message: "Your account was deleted succesfully!" });
  } catch (error) {
    res.json(error);
  }
});

const upload = multer({
  limits: {
    fieldSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)/)) {
      return cb(new Error("Please upload an image file!"));
    }
    cb(undefined, true);
  },
});

router.post(
  "/user/upload-avatar",
  auth,
  upload.single("upload-avatar"),
  async (req, res) => {
    try {
      req.user.avatar = await sharp(req.file.buffer)
        .resize({ width: 500, height: 500 })
        .png()
        .toBuffer();
      await req.user.save();
      res.json(req.user.avatar);
    } catch (error) {
      res.status(400).json(error);
    }
  }
);

router.get("/user/:username/avatar", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user && !user.avatar) {
      res.status(404).json();
    }
    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

//get /user/me
//patch /user/me
//post /user/logout
//post /user/logout-all
//delete /user/me
