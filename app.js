const express = require('express');
const Email = require('email-templates');
const nodemailer=require('nodemailer');
const pug = require('pug');
require('dotenv').config();

// init express
const app = express()

// middleware / routing
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.raw());

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service : 'Gmail',
    
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
    
});


//api
app.post('/sendEmail', (req,res) => {
    console.log(req.body)
    const email = new Email({
        message: {
          from: 'no-reply@antares.id'
        },
        // uncomment below to send emails in development/test env:
        send: true,
        transport: transporter,
        preview : false
    });
      
    email
        .send({
          template: "admin_template",
          message: {
            to: req.body.Email
          },
          locals: {
            data: req.body
          }
        })
        .then(function (response) {                          
            console.log(JSON.stringify(response.data))
            return res.send({
                status: response.data
            })
        })
        .catch(function (error) {
            console.log(error)
            return res.send({
                status: 'false'
            })
        }) 
})

// listen server
app.listen(3000, () => {
    console.log('Server Running')
})