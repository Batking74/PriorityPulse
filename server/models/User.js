const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');
const prioritySchema = require("./Priority");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  savedPriorities: [prioritySchema],
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

//Will return the amount of priorities a user will have
userSchema.virtual('priorityCount').get(function () {
  return this.savedPriorities.length;
});

const User = model("User", userSchema);

module.exports = User;
