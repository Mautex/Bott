const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 

  const embed = new Discord.MessageEmbed()



.setColor('YELLOW')
  .setTitle(ayarlar.botisim + ' Yardım Menüsüne Hoșgeldin 👋')
  .setDescription(`

🔨 | Prefixim : !

🎯 | **!eğlence:** = Eğlence komutlarını görüntersiniz.
🌌 | **!gif:** = Gif komutlarını görüntersiniz.
🤖 | **!bot:** = Botun ana komutlarını görüntersiniz.


💥Bağlantılar 

**» Botun Destek sunucusu** [Destek sunucusu](https://discord.gg/dBJ4TNYSgC)
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