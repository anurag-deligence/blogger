const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
console.log("Database server at 27017");
module.exports = mongoose;

module.exports.secret = "yoursecret";