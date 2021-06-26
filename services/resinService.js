const mailService = require("./mailService");

module.exports.checkResin = async function checkResin(resin) {
  mailService.sendMail(resin.mail.value, resin.username.value);
};
