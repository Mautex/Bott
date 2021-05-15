const Discord = require ('discord.js')
exports.run = async (client, message, args) => {
var oyun = [
  `1`,
`2`,
`3`,
`4`,
`5`,
`6`
]
 
         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
const embed = new Discord.MessageEmbed()
.setTitle('Zar Oyunu')
.setDescription(`Zar Attın! \n Zar Sonuç:${oyun[random]} `)
message.channel.send(embed)
};
exports.conf = {
  name: "zar",
  aliases: ["zar"]
};