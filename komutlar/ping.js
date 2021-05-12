const Discord = require('discord.js')

exports.run = async (client ,message, args) =>{


const embed = new Discord.MessageEmbed()
.setTitle("Pingim")
.setColor("RANDOM")
.setDesceription(` ms`)
message.channel.send(embed)
};
exports.conf = {
enabled: true,
 guildOnly: false,
 aliases: ['ping','ms'],
 permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun Pingine Bakarsınız',
usage: 'ping'
};