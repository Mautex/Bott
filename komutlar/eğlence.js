const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  const embed = new Discord.MessageEmbed()

.setColor('YELLOW')
  .setTitle('Eğlence Yardım Menüsüne Hoșgeldin')

  .setDescription(`


:white_small_square: | **!token:** = sana tokenimi veririm.
:white_small_square: | **!sunucubilgi:** = sunucuhakkında bilgi verir.
:white_small_square: | **!sil:** = belittiğiniz sayıda mesaj siler.
:white_small_square: | **!atatürk:** = o7.
:white_small_square: | **!avatar:** = avatarınızı gsterir.
:white_small_square: | **!id:** = istediğiniz kişinin idsini verir.
:white_small_square: | **!kaçcm:** = sen anladın orayı :D
:white_small_square: | **!kralol:** = kral olursun.
:white_small_square: | **!kedi:** = kedi gif.
:white_small_square: | **!salak:** = salak gif atar :D.
:white_small_square: | **!korona :** = korona sayısını gösterir.
:white_small_square: | **!yapımcım:** = yapımcımı gösterir.
:white_small_square: | **!aşkölçer:** = etiketleiğiniz kişiyle aşk derecenizi gösterir.
:white_small_square: | **!espiri:** = espiri yaparsınız.
:white_small_square: | **!lafat:** = Bot laf atar.
:white_small_square: | **!türk:** = Bot türkiye gifi gösterir.
:white_small_square: | **!ara155:** = 155'i arasınız.
:white_small_square: | **!yazankazanır:** = ilk yazan kazanır :D


`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["eğlence"]

}

exports.help = {

  name: 'eğlence',
  description: 'eğlence Menüsünü Açar',
  usage: 'eğlence'

}