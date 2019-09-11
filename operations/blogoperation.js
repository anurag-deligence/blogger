const BlogUser = require("../models/userBlog");
const mongoose = require("mongoose");

module.exports.findByType = (pageNo, callback) => {
  size = 2;
  BlogUser.find({ postType: 'public' }, callback).skip((pageNo - 1) * size).limit(size).sort('-createdAt');
}

module.exports.createBlog = (data, callback) => {
  var blog = new BlogUser(data);
  blog.save(callback);
}

module.exports.findByBlogId = (blogId, callback) => {
  var blogId = { "_id": mongoose.Types.ObjectId(blogId) };
  BlogUser.findOne(blogId, callback)
}

module.exports.deleteBlog = (blogId, callback) => {
  var blogId = { "_id": mongoose.Types.ObjectId(blogId) };
  BlogUser.findByIdAndDelete(blogId, callback);
}

module.exports.updateBlog = function (data, callback) {
  var blogId = data.id;
  var data = {
    title: data.title,
    description: data.description,
    postType: data.postType
  }
  var blogId = { "_id": mongoose.Types.ObjectId(blogId) };
  BlogUser.findByIdAndUpdate(blogId, data, callback);
}

module.exports.findAllByType = (callback) => {
  BlogUser.find({ postType: 'public' }, callback);
}