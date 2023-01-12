require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Quiz = require("../models/quiz");

const userSchema = new mongoose.Schema({
  admin: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: Buffer,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 7,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "passowrd"');
      }
    },
  },
  birthday: {
    type: Date,
    default: new Date("1990-01-01"),
  },
  newsLetter: {
    type: Boolean,
    default: false,
  },
  totalQuiz: {
    type: Number,
    default: 0,
  },
  totalCompleted: {
    type: Number,
    default: 0,
  },
  totalSolved: {
    type: Number,
    default: 0,
  },
  totalTrue: {
    type: Number,
    default: 0,
  },
  totalPass: {
    type: Number,
    default: 0,
  },
  totalFalse: {
    type: Number,
    default: 0,
  },
  totalPoint: {
    type: Number,
    default: 0,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.virtual("quizzes", {
  ref: "Quiz",
  localField: "_id",
  foreignField: "quizAuthor",
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_KEY);

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login!");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login!");
  }

  return user;
};

//user kaydedilmeden once passwordu hashlemek
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

userSchema.pre("remove", async function (next) {
  const user = this;

  await Quiz.deleteMany({ quizAuthor: user._id });
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
