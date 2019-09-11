const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Users = require('../operations/useroperation');
const BlogUsers = require("../operations/blogoperation");
const Comments = require("../operations/commentoperation")
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const nodemail = require('../config/nodemails');
const async = require("async");

router.post('/home', (req, res, next) => {
  pageNo = req.body.pageNo;
  console.log(req.body.pageNo);
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
  var { name, email, password, gender } = req.body;
  let newUser = new User({
    name, email, password, gender
  })
  Users.addUser(newUser, (err, user) => {
    if (err)
      res.json({ success: false, msg: 'failed to register user', error: err })
    else
      res.json({ success: true, msg: 'user registered' })
  })
});

router.post('/forgetpassword', (req, res, next) => {
  var email = req.body.email;
  Users.getUserByUserName(email, (err, user) => {
    if (err)
      throw err
    else if (user !== null) {
      nodemail.nodeMail(email, (err, info) => {
        if (err)
          throw err
        else
          res.json({ status: true })
      })
    }
    else {
      console.log(user)
      return res.json({ success: false, msg: 'User not found' })
    }
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
        const token = jwt.sign(user.toJSON(), config.secret, { expiresIn: '2h' });
        var { id, name, email, role } = user;
        res.json({
          status: true,
          token: token,
          user: { id, name, email, role }
        })
      }
      else
        return res.json({ status: true, msg: 'Incorrect Password' })
    })
  })
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
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
          var result = await Comments.findComments(blogs);
        res.json({
          comments: result,
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
        return res.json({ status: true, msg: 'Incorrect Password' })
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
    else {
      console.log("docs", docs);
      res.json(docs)
    }

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

  async.parallel([
    (callback) => {
      BlogUsers.findByBlogId(blogId, (err, docs) => {
        callback(err, docs)
      })
    },
    (callback) => {
      Comments.comments(blogId, (err, data) => {
        if (data)
          callback(err, data.comments)
        else
          callback(err, null)
      })
    }
  ], (err, result) => {
    res.json(result)
  })
})

router.post('/addComments', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var { userComments, blogId } = req.body;
  details = { email: req.user.email, userComments, blogId }
  Comments.comments(details.blogId, async (err, docs) => {
    if (err)
      throw err
    else if (docs)
      Comments.updateComments(details, (err, docs) => {
        if (err)
          throw err
        else
          res.json(docs)
      })
    else
      Comments.addComments(details, (err, docs) => {
        if (err)
          throw err
        else
          res.json(docs)
      })
  })
})

router.post('/deleteComment', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var { comment, id } = req.body
  Comments.deleteComment(comment, id, (err, docs) => {
    if (err)
      throw err
    else
      res.json('done');
  })
})


module.exports = router;


