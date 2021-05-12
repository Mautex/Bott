const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
let question = args.join(" ");
let user = message.author.username;
if (!question)
  return message.channel
  .send(
    new Discord.MessageEmbed()
.addField(`❌ **Yazı Yazman Gerek** ❌`)
    