const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  const embed = new Discord.MessageEmbed()


.setColor('YELLOW')
  .setTitle('Gif Yardım Menüsü')
  .setDescription(`



:white_small_square: | **!animal:** = Bot hayvan gif atar.
:white_small_square: | **!anime:** = Bot anime  gif atar.
:white_small_square: | **!baby:** = Bot bebek gif atar.
:white_small_square: | **!man:** = Bot erkek gif atar.
:white_small_square: | **!woman:** = Bot kadın gif atar.
:white_small_square: | **!türk:** = Bot türk gif atar.




💥Bağlantılar 

**» Botun Destek sunucusu** [Destek sunucusu](https://discord.gg/erTqUNqSUd)

`)



 message.channel.send(embed) 

}

exports.conf = {

  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["gif"]

}

exports.help = {

  name: 'gif',
  description: 'Gif Menüsünü Açar',
  usage: 'gif'



}