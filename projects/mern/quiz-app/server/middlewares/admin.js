//token
//decoded
//admin'i bul
//admin ve tokeni ayarla
//next yap

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const admin = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      throw new Error();
    }

    const admin = await User.findOne({
      admin: true,
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!admin) {
      throw new Error();
    }

    req.admin = admin;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = admin;
