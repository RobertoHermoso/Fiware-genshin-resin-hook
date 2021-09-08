// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

const mailService = require("./services/mailService");

// Initialize express and define a port
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post("/hook", (req, res) => {
  let resin = req.body.data[0];
  mailService.sendMail(resin.mail.value, resin.username.value);
  res.status(200).end();
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
