import nodemailer from "nodemailer";
import Transport from "nodemailer-sendinblue-transport";

let transport = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: "stefan.jeftic122@gmail.com",
    pass: "xsmtpsib-f330f922361a0a6f0f954fe1a974fd7d6f5a00f50aacbda0de0717444b8ec518-nkLF6f8HpIRDCbGg",
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
