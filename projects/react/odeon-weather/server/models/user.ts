import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    maxlength: 50,
  },
  lastName: {
    type: String,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 500,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
})

const userModel = mongoose.model('User', userSchema)

export default userModel
