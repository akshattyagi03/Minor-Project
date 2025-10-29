const paypal = require("paypal-rest-sdk");
require("dotenv").config();

paypal.configure({
  mode: process.env.PAYPAL_MODE || "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID || "test",
  client_secret: process.env.PAYPAL_CLIENT_SECRET || "test",
});

module.exports = paypal;
