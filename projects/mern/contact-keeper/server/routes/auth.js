const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

// @route           POST api/auth
// @description     Auth user & get token
// @access          Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-pasword"); //Databaseden kullanicinin verilerini cekiyoruz password haric diyoruz
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

const User = require("../models/User");
// @route           GET api/auth
// @description     Get logged in user
// @access          Private
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "invalid Credentials" });
      }

      //Hashlenen passwordu karsilastirma Compare etmek
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      //Karsilastirir ve jwt.sign ile girisini saglariz
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000 //Yani 3600 dersek 3600 saniye oda 60dakika yani 1 saat hesabin aktif kalacagi sure
        },
        //Ve en son olarakda istege bagli olarakda token koyabiliriz
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
