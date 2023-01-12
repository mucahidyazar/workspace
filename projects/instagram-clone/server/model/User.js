/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const UserSchema = {
  username: String,
  email: String,
  dialCode: String,
  phone: String,
  fullName: String,
  birthday: Date,
  age: Number,
  countryCode: String,
  countryName: String,
  savePassword: Boolean,
  private: Boolean,
  profilePhoto: String,
  album: Array,
  followers: Array,
  following: Array,
  posts: Array,
  tagPosts: Array,
  savedPosts: Array,
};

export const User = mongoose.model("User", UserSchema);