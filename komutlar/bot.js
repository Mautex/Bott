const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 

  const embed = new Discord.MessageEmbed()



.setColor('YELLOW')
  .setTitle('Bot Yardım Menüsü')
  .setDescription(`



:white_small_square: | **!test:** = botun çalıştığınız yada çalışmadığı söyler.
:white_small_square: | **!oylama:** = oyalma yaprsınız.
:white_small_square: | **!id:** = istediğiniz kișinin idsini atar.
:white_small_square: | **!türk:** = türk gif atar.
:white_small_square: | **!toplamkomut:** = toplam komutu gösterir.
:white_small_square: | **!sil:** = Belirtiğiz sayıda mesajı siler.
:white_small_square: | **!yapımcım:** = Botun yapımcısını gösterir.
:white_small_square: | **!yavașmod:** = Herhangi bir kanalda slowmode açarsınız.
:white_small_square: | **!nuke:** = Bot belirtiğiniz bir kanalı silip tekrar acar.
:white_small_square: | **!kick:** = belirtiğiniz kișiyi sunucudan atar.
:white_small_square: | **!bansay:** = sunucunuzda banlanan toplam sayıyı gösterir.
:white_small_square: | **!ping:** = Botun pingini gösterir.


`)



 message.channel.send(embed) 

}

exports.conf = {

  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["bot"]

}

exports.help = {

  name: 'bot',
  description: 'Yardım Menüsünü Açar',
  usage: 'bot'



}