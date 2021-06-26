const mailService = require("./mailService");

module.exports.checkResin = async function checkResin(resin) {
  console.log(resin);
  if (resin.value === 160 && resin.modified) {
    console.log("Resin is full!");
    mailService.sendMail(resin.mail.value, resin.username.value);
  }
};
