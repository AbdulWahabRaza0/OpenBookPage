require("dotenv").config();
const express = require("express");
const cors = require("cors");
var nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var transporter = nodemailer.createTransport({
  service: "gmail",
  secure: "false",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});
app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.post("/contact", (req, res) => {
  try {
    const { email, linkedIn } = req.body;
    console.log("Data is ", email);
    if (email) {
      var mailOptions = {
        from: email,
        to: process.env.email,
        subject: "dummy",
        text: "dummy",
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.status(400).json({ message: "Unknown Error" });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "Messgage Succesfully Sended" });
        }
      });
    }
  } catch (e) {
    res.status(400).json({ message: "Unknown Error" });
  }
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening to PORT=>${port}`);
});
