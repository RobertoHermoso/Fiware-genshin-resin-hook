const ProtonMail = require("protonmail-api");

module.exports.sendMail = async function sendMail(mail, username) {
  console.log("hello");
  console.log(process.env.MAILPASS);
  console.log(process.env);
  const pm = await ProtonMail.connect({
    username: "genshin_resin@protonmail.com",
    password: process.env.MAILPASS,
  });

  await pm.sendEmail({
    to: mail,
    subject: "Your resin is full " + username + "!",
    body: "Your current resin is full charged, don't waste resin!",
  });

  pm.close();
};
