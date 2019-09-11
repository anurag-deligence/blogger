const mongoose = require("../config/database");

var Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: { type: String },
  description: { type: String },
  postType: { type: String, default: 'private' },
  createdAt: { type: Date, default: Date.now }
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;