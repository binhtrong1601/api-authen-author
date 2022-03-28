const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const UserSchema = require('./schema');
const { USER } = require('../../constants/models');
const JWT_KEY = process.env.JWT_KEY;

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jsonwebtoken.sign({ _id: user._id }, JWT_KEY, { expiresIn: '6h' });
  if (!user?.tokens) {
    user.tokens = [];
  }
  user.tokens.push({ token });
  await user.save();
  return token;
};

UserSchema.statics.findByCredentials = async (email, username, password) => {
  // Search for a user by email/username and password.
  let user;

  if (email) {
    user = await UserModel.findOne({ email });
  } else if (username) {
    user = await UserModel.findOne({ username });
  }

  if (!user) {
    throw new Error({ error: 'Invalid login credentials' });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error({ error: 'Invalid login credentials' });
  }

  return user;
};

const UserModel = mongoose.model(USER.MODEL_NAME, UserSchema, USER.COLLECTION_NAME);

module.exports = UserModel;
