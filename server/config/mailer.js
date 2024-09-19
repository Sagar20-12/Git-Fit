const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: accessToken,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = (to, subject, text) => {
  console.log(to);
  console.log(subject);
  const mailOptions = {
    from: process.env.GMAIL,
    to: to,
    subject: subject,
    generateTextFromHTML: true,
    html: text,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });
};
try {
  const accessToken = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GOOGLE_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken.token
    }
  });

  return transporter;
} catch (error) {
  console.error('Error creating transporter:', error);
  throw error;
}
};


module.exports = createTransporter;