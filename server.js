const express = require("express");
// const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.post("/contact", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "datasideaofficial@gmail.com",
      pass: "ensqbpeydtwpitxd",
    },
  });

  const mailOptions = {
    to: "shafarakj@gmail.com",
    subject: `New contact from ${req.body.name} via dosomething website`,
    text: `${req.body.message} \n Sender email: ${req.body.email} \n Sender phone: ${req.body.phone}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200);
      console.log(mailOptions);
    }
  });
});

app.listen(port, () => console.log("Server started"));
