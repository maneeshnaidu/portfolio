// const express = require("express");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");

// const app = express();

// // Configure middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Define route for handling form submission
// app.post("/send-email", function(req, res) {
//   // Extract form data
//   const { name, email, message } = req.body;

//   // Create a transporter with your email service credentials
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "naidum69@gmail.com",
//       pass: "Gameover2021"
//     }
//   });

//   // Configure the email details
//   const mailOptions = {
//     from: "your-email@gmail.com",
//     to: "recipient@example.com",
//     subject: "New Message from Contact Form",
//     text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       console.error(error);
//       res.sendStatus(500); // Error response
//     } else {
//       console.log("Email sent: " + info.response);
//       res.sendStatus(200); // Success response
//     }
//   });
// });

// // Start the server
// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });
