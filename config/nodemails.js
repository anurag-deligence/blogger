const nodemailer = require('nodemailer');
//require('dotenv').config();
module.exports.nodeMail = (userObject, callback) => {
  // var userObject = JSON.stringify(userObject);
  // var data = Buffer.from(userObject).toString('base64');
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      port: 25,
      auth: {
        user: 'aky7503051815@gmail.com',
        pass: 'anuragYadav75'
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    let mailOptions = {
      from: 'aky7503051815@gmail.com',
      to: userObject,
      subject: "classmate.com",
      text: "Click the link to Reset Your Password",
      //html: '<p>Click <a href="http://localhost:3000/' + data + '">here</a> to reset your password</p>"'
    };
    transporter.sendMail(mailOptions, callback);
  })
}