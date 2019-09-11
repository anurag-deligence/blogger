const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/users");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server listen at ' + port)
})

app.get('/', (req, res) => {
  res.send("here");
});

app.use('/users', users);