const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 

  const embed = new Discord.MessageEmbed()



.setColor('YELLOW')
  .setTitle('Yardım Menüsüne Hoșgeldin')
  .setDescription(`

prefixim : 

🎯 | **a!eğlence:** = Eğlence komutlarını görüntersiniz.
🌌 | **a!gif:** = Gif komutlarını görüntersiniz.
🤖 | **a!bot:** = Botun ana komutlarını görüntersiniz.


💥Bağlantılar 

**» Davet Linki** [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=832200119133667360&permissions=8&scope=bot)

`)

 message.channel.send(embed) 

}

exports.conf = {

  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["help"]

}

exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Açar',
  usage: 'yardım'



}