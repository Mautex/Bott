const db = require("wio.db")
const Discord = require("discord.js")
const ayarlar = require('../ayarlar.json')
let prefix= ayarlar.prefix

exports.run = function(client, message, args) {


var USER = message.author;
var REASON = args.slice(0).join(" ");
const embed =new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`Afk Olmak İçin Bir Sebep Belirtin. \n örnek Kullanım : ${prefix}afk <sebep>`)
if(!REASON) return message.channel.send(embed)


db.set(`afk_${USER.id}`, Date.now());
db.set(`afk_süre_${USER.id}`, Date.now());
const afk = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`AFK Moduna Girildi! \n AFK Olma Sebebi : **${REASON}**`)
message.channel.send(afk)

};

exports.conf = {
enabled: true,
guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'afk', 
    description: 'Afk Moduna Girersiniz', 
    usage: 'afk'
};