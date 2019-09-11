const mongoose = require("../config/database");

var Schema = mongoose.Schema;
const CommentSchema = new Schema({
  blogId: { type: Schema.Types.ObjectId, ref: 'Blog' },
  comments: [{ type: Object }],
  createdAt: { type: Date, default: Date.now }
})

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;