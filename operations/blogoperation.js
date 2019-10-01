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

module.exports.updateBlog = (data, callback) => {
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

module.exports.deleteUsersBlog = async (blogs, callback) => {
  for (let blog of blogs) {
    var blogId = { "_id": mongoose.Types.ObjectId(blog) };
    await BlogUser.findOneAndDelete(blogId, callback);
  }
  return callback;
}

module.exports.addComment = (details, callback) => {
  var blogId = { "_id": mongoose.Types.ObjectId(details.blogId) };
  var data = { $push: { comments: { comment: details.userComments, userName: details.userName } } }
  BlogUser.findOneAndUpdate(blogId, data, { safe: true, upsert: true }, callback);
}

module.exports.deleteComment = (commentId, blogId, callback) => {
  var blogId = { '_id': mongoose.Types.ObjectId(blogId) };
  var data = { $pull: { comments: { '_id': mongoose.Types.ObjectId(commentId) } } };
  BlogUser.findOneAndUpdate(blogId, data, callback);
}

module.exports.searching = (value, callback) => {
  console.log(value)
  BlogUser.find({ "title": { $regex: ".*" + value.value + ".*" } }, (callback)).limit(5);
}
