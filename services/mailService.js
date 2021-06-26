const ProtonMail = require("protonmail-api");

export async function sendMail() {
  const pm = await ProtonMail.connect({
    username: "genshin_resin@protonmail.com",
    password: process.env.MAILPASS,
  });

  await pm.sendEmail({
    to: "rhermoso98@gmail.com",
    subject: "Your resin is full!",
    body: "Your current resin is full charged, don't waste resin!",
  });

  pm.close();
}
