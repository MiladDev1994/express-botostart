const port = 3000;
const { default: axios } = require("axios");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("dotenv").config()
var nodemailer = require('nodemailer');


app.get("/create", async (req, res) => {
    
    console.log("object");
    var transporter = nodemailer.createTransport({
      // host: 'smtp.ethereal.email',
      // port: 587,
      // secure: true,
      service: "gmail",
      auth: {
        // user: "miladgolinezhad73@gmail.com",
        // pass: "vhfl xwmp rkyn pbda"
        user: "milad.golinejad.dev@gmail.com",
        pass: "gmeg kfci ikua pbsh",
      }
    });
    
    var mailOptions = {
      from: '"milad" milad.golinejad.dev@gmail.com',
      to: 'miladgolinezhad73@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!',
      html: "<h1 href='https://www.google.com/' style='width: 100%; background-color: red'>Milad</h1>",
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  
    res.send('respond with a resource');
})

app.listen(port, () => { 
    console.log(`app started on port ${port} \n http://localhost:${port}`) 
})