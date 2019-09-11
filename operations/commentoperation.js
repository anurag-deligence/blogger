const Comment = require("../models/comments");
const mongoose = require("mongoose");

module.exports.comments = (details, callback) => {
  var blogId = { "blogId": mongoose.Types.ObjectId(details) };
  Comment.findOne(blogId, callback);
}

module.exports.addComments = (details, callback) => {
  var data = { blogId: mongoose.Types.ObjectId(details.blogId), comments: { comment: details.userComments, email: details.email } };
  var comment = new Comment(data);
  comment.save(callback);
}

module.exports.updateComments = (details, callback) => {
  var blogId = { blogId: mongoose.Types.ObjectId(details.blogId) }
  var data = { $push: { comments: { comment: details.userComments, email: details.email } } };
  Comment.findOneAndUpdate(blogId, data, callback);
}

module.exports.findComments = async (blogs) => {
  var commentsArray = [];
  for (let blog of blogs)
    await Comment.findOne({ blogId: blog._id }, (err, data) => {
      if (err)
        throw err
      else
        if (data)
          commentsArray.push(data)
    });
  return commentsArray;
}

module.exports.deleteComment = (comment, id, callback) => {
  var blogId = { blogId: mongoose.Types.ObjectId(id) };
  var data = { $pull: { comments: { comment: comment } } };
  Comment.findOneAndUpdate(blogId, data, callback);
}
