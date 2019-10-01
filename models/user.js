const mongoose = require("../config/database");

var Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetPasswordToken: { type: String },
  resetTokenExpires: { type: String },
  gender: { type: String, required: true },
  blog: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
  role: { type: String, default: 'user' },
  image: { type: String }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;