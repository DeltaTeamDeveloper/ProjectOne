export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.office365.com",
    auth: {
      user: 'info@texasbookpublishing.com',
      pass: "P@ssw0rd.",
    },
    secure: true,
  })
  let newDate = new Date()
  const mailData = {
    from: 'info@texasbookpublishing.com',
    to: 'info@texasbookpublishing.com',
    subject: `New Lead Generated`,
    html: `<h3>New Lead Generated Client Data Is Listed Below </h3> <p>Name : ${req.body.first}</p> <p> email : ${req.body.email}</p> <p> Date : ${newDate}</p> `
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}