const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Users = require('../operations/useroperation');
const BlogUsers = require("../operations/blogoperation");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const nodemail = require('../config/nodemails');
const async = require("async");
const multer = require("multer");

router.post('/home', (req, res, next) => {
  pageNo = req.body.pageNo;
  BlogUsers.findAllByType((err, docs) => {
    if (err)
      throw err
    else
      BlogUsers.findByType(pageNo, (err, blogs) => {
        if (err)
          throw err
        else
          res.json({
            totalPage: docs.length / 2,
            data: blogs
          })
      })
  })
})

router.post('/register', (req, res, next) => {
  var { name, email, password, gender, userName } = req.body;
  let newUser = new User({
    name, email, password, gender, userName
  })
  Users.addUser(newUser, (err, user) => {
    if (err) {
      var field = err.errmsg.split('index: ')[1].split('_1 dup key:');
      res.json({ success: false, msg: 'failed to register user', error: field })
    } else
      res.json({ success: true, msg: 'user registered' })
  })
});

router.post('/forgetpassword', (req, res, next) => {
  var email = req.body.email;
  async.waterfall([
    (callback) => {
      Users.getUserByUserName(email, (err, user) => {
        callback(err, user)
      })
    },
    (user, callback) => {
      if (user !== null) {
        var query = { userName: user.userName };
        console.log(query);
        var resetToken = jwt.sign(query, config.secret);
        var resetExpire = Date.now() + 3600000;
        var data = { resetPasswordToken: resetToken, resetTokenExpires: resetExpire };
        Users.resetPasswordData(query, data, (err, newdata) => callback(err, newdata))
      }
      else {
        res.json({ status: false })
      }
    },
    (newdata, callback) => {
      console.log("docs", newdata);
      if (newdata !== null)
        nodemail.nodeMail(newdata.email, newdata.resetPasswordToken, (err, info) => {
          callback(err, info);
        })
    }
  ], (err, result) => {
    if (err)
      res.json({ status: false })
    else
      res.json({ status: true })
  })
});

router.post('/forgetpassword/:id', (req, res, next) => {
  var { userid, npassword, ncpassword } = req.body;
  console.log("token", userid);
  Users.getUserByResetToken(userid, (err, user) => {
    if (err)
      throw err
    if (!user) {
      console.log(user);
      res.json({ msg: "email not registered" });
    }
    if (user.resetTokenExpires < Date.now()) {
      res.json({ msg: 'Link Expired' })
    }
    Users.updatePassword(user.email, npassword, (err, docs) => {
      if (err)
        throw err
      else
        res.json({ msg: "Updated" })
    })
  })

});

router.post('/auth', (req, res, next) => {
  var { email, password } = req.body;

  Users.getUserByUserName(email, (err, user) => {
    if (err)
      throw err
    if (!user)
      return res.json({ success: false, msg: 'User not found' })

    Users.comparePassword(password, user.password, (err, isMatch) => {
      if (err)
        throw err;
      if (isMatch) {
        var o = {
          name: user.name,
          email: user.email,
          role: user.role,
          userName: user.userName,
          "_id": user._id
        }
        const token = jwt.sign(o, config.secret, { expiresIn: '2h' });
        var { name, email, role, userName } = user;
        res.json({
          status: true,
          token: token,
          user: { name, email, role, userName }
        })
      }
      else
        return res.json({ status: true, msg: 'Incorrect Password' })
    })
  })
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  console.log("jone:", req.user);
  res.json(req.user)
});

router.post('/dashboard', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  pageNo = req.body.pageNo;
  BlogUsers.findAllByType((err, docs) => {
    if (err)
      throw err
    else
      BlogUsers.findByType(pageNo, async (err, blogs) => {
        if (err)
          throw err
        else
          res.json({
            totalPage: docs.length / 2,
            data: blogs,
            myBlogsId: req.user.blog,
            role: req.user.role
          })
      })
  })
});

router.post('/changePassword', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var { email, opassword, npassword } = req.body;

  Users.getUserByUserName(email, (err, user) => {
    if (err)
      throw err
    if (!user)
      return res.json({ success: false, msg: 'User not found' })

    Users.comparePassword(opassword, user.password, (err, isMatch) => {
      if (err)
        throw err;
      if (isMatch)
        Users.updatePassword(user.email, npassword, (err, docs) => {
          if (err)
            throw err
          else
            res.json({ msg: "Updated" })
        })
      else
        return res.json({ status: false, msg: 'Incorrect Password' })
    })
  })
});

router.post('/create-blog', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  email = req.user.email;
  data = req.body;
  BlogUsers.createBlog(data, (err, docs) => {
    if (err)
      throw err;
    else
      Users.addIdCreateBlog(email, docs, (err, docs) => {
        if (err)
          throw err
        else
          res.json('true');
      })
  })
})

router.post('/editBlog/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var blogId = req.body.id;
  BlogUsers.findByBlogId(blogId, (err, docs) => {
    if (err)
      throw err
    else
      res.json(docs)
  })
})

router.post('/deleteBlog', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  email = req.user.email;
  blogId = req.body.blog;
  BlogUsers.deleteBlog(blogId, (err, docs) => {
    if (err)
      throw err
    else
      Users.deleteBlog(email, blogId, (err, docs) => {
        if (err)
          throw err
        else
          res.json({ "status": true })
      })
  })
})

router.post('/updateblog', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  data = req.body;
  BlogUsers.updateBlog(data, (err, docs) => {
    if (err)
      throw err
    else
      res.json({ status: "running.." })
  });
})

router.get('/myblog', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  email = req.user.email;
  Users.showMyBlog(email, (err, docs) => {
    if (err)
      console.log(err)
    else
      res.json(docs[0].blog);
  })
})

router.post('/comments/:blogId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var blogId = req.body.blogId;
  BlogUsers.findByBlogId(blogId, (err, docs) => {
    if (err)
      throw err
    else
      res.json({ data: docs })
  })
})

router.post('/addComments', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var { userComments, blogId } = req.body;
  details = { userName: req.user.userName, userComments, blogId }
  BlogUsers.addComment(details, (err, docs) => {
    if (err)
      throw err
    else
      res.json(docs)
  })
})

router.post('/deleteComment', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var { commentId, blogId } = req.body;
  BlogUsers.deleteComment(commentId, blogId, (err, docs) => {
    if (err)
      throw err
    else {
      res.json('done');
    }
  })
})

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'blogger/src/assets/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({ storage: storage });
router.post('/upload', passport.authenticate('jwt', { session: false }), upload.single('image'), (req, res, next) => {
  console.log(req.file);
  User.findOneAndUpdate({ email: req.user.email }, { image: req.file.filename }, (err, docs) => {
    if (err)
      console.log('error');
    else {
      res.json('done');
    }
  })
})

router.delete('/deleteAccount', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var { email, blog } = req.user;
  async.parallel([
    (callback) => {
      BlogUsers.deleteUsersBlog(blog, (err, data) => {
        callback(err, data)
      })
    },
    (callback) => {
      Users.deleteAccount(email, (err, docs) => {
        callback(err, docs)
      })
    }
  ], (err, result) => {
    if (result)
      res.json({ status: true })
    else
      res.json({ status: false })
  })
})

router.post('/searchUser', (req, res, next) => {
  console.log("tata", req.body)
  Users.searchName(req.body, (err, docs) => {
    if (err)
      throw err
    else {
      console.log(docs);
      if (docs)
        res.json({ name: docs.name, blogs: docs.blog, image: docs.image });
      else
        res.json(docs)
    }
  })
})

router.post('/searchKeyup', async (req, res, next) => {
  console.log(req.body)
  var { category } = req.body;
  var data = [];
  if (category == 'userName' || category == "name") {
    Users.searching(req.body, (err, docs) => {
      if (err)
        throw err;
      else {
        for (let doc of docs) {
          if (category == 'userName')
            data.push(doc.userName)
          else if (category == 'name')
            data.push(doc.name)
        }
        res.json(data);
      }
    })
  }
  else
    BlogUsers.searching(req.body, (err, docs) => {
      if (err)
        throw err
      else
        for (let doc of docs)
          data.push(doc.title)
      res.json(data)
    })

})

module.exports = router;

