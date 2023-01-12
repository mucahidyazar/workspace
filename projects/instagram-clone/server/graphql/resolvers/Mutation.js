/* eslint-disable prettier/prettier */
import { User } from '../../model/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default {
  createUser: async (parent, args, ctx, info) => {
    const {
      username = "",
      email,
      password,
      dialCode = "+1",
      phone = "",
      fullName,
      birthday,
      age = 18,
      countryCode = "US",
      countryName = "United State of America",
    } = args;

    const newUser = {
      username,
      email,
      password,
      dialCode,
      phone,
      fullName,
      birthday,
      age,
      countryCode,
      countryName,
      savePassword: true,
      private: false,
      profilePhoto: "",
      album: [],
      followers: [],
      following: [],
      posts: [],
      tagPosts: [],
      savedPosts: [],
    };

    const createUser = new User(newUser);

    const salt = await bcrypt.genSalt(10);
    createUser.password = await bcrypt.hash(password, salt);

    createUser.save();
    return createUser;
  }
}