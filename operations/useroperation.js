const User = require("../models/user");
const bcrypt = require('bcrypt');

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        throw err
      }
      else {
        newUser.password = hash;
        newUser.save(callback);
      }
    })
  })
}

module.exports.getUserByUserName = function (email, callback) {
  var query = { email: email };
  User.findOne(query, callback);
}

module.exports.comparePassword = function (candidatePassword, password, callback) {
  bcrypt.compare(candidatePassword, password, (err, isMatch) => {
    if (err)
      throw err;
    callback(null, isMatch);
  })
}

module.exports.updatePassword = function (email, npassword, callback) {
  var query = { email: email };
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(npassword, salt, (err, hash) => {
      if (err) {
        throw err
      }
      else {
        npassword = hash;
        var update = { password: npassword };
        User.findOneAndUpdate(query, update, callback);
      }
    })
  })
}

module.exports.addIdCreateBlog = function (email, docs, callback) {
  var query = { email: email };
  var data1 = { $push: { blog: docs } };
  User.findOneAndUpdate(query, data1, { safe: true, upsert: true }, callback);
}

module.exports.deleteBlog = function (email, blogId, callback) {
  var query = { email: email };
  var data = { $pull: { blog: blogId } };
  User.findOneAndUpdate(query, data, callback);
}

module.exports.showMyBlog = (email, callback) => {
  var query = { email: email };
  User.find(query)
    .populate('blog')
    .exec((callback));
}

module.exports.deleteAccount = (email, callback) => {
  var query = { email: email };
  User.findOneAndDelete(query, callback);
}

module.exports.searchName = (body, callback) => {
  var query = { [body.category]: body.type };
  User.findOne(query)
    .populate({
      path: 'blog',
      match: { postType: 'public' }
    })
    .exec((callback));
}

module.exports.resetPasswordData = (query, data, callback) => {
  User.findOneAndUpdate(query, data, { new: true }, callback);
}

module.exports.getUserByResetToken = (userid, callback) => {
  var query = { resetPasswordToken: userid }
  User.findOne(query, callback);
}

module.exports.searching = (value, callback) => {
  User.find({ [value.category]: { $regex: ".*" + value.value + ".*" } }, (callback));
}