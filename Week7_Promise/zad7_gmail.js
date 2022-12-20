import nodemailer from "nodemailer";
import Transport from "nodemailer-sendinblue-transport";
import * as dotenv from "dotenv";
dotenv.config();

let transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: true,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASS,
  },
});
const mailOptions = {
  from: "stefan.jeftic122@gmail.com", // Sender address
  to: "dragana.josipovic95@gmail.com", // List of recipients
  subject: "Node Mailer", // Subject line
  text: "Saljem zadatak 5.", // Plain text body
  attachments: [
    {
      filename: "Weather.csv",
      path: "Weather.csv",
    },
    {
      filename: "zadatak5.txt",
      path: "zadatak5.txt",
    },
  ],
};

transport.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
