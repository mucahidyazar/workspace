const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route           api/users
// @description     Register a user
// @access          Public
router.post(
  "/",
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      user = new User({
        name,
        email,
        password
      });

      //Hashing Password
      //Once salti aliriz sonra hashleriz
      const salt = await bcrypt.genSalt(10); //.genSalt() icine default olarak numara alir oda 10 dur
      //user.passwordu esitleriz. await yaparak bcrypt.hash ile hashleriz cunku bize deger donmesini istiyoruz.
      //hash icine 2 deger alir. 1.si gelen password ikincisi salt degeridir.
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Kayit sonrasi girisi asagidaki sekilde saglariz
      //Once jwt yani jsonwebtokeni import ederiz buraya
      //Sonra payloadi olustur asagidaki gibi
      //jwt semasina bak, jwt 3 sey ister. payload, secretkey, ve expire yani acik kalma suresi
      //userid yi jwt de payloada gonderecegiz
      //secretkeyi configde olustur ve configi buraya import edip icinden al
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
