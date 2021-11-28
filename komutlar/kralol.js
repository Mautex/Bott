const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setAuthor(message.author.username + ' Artık Kralsın !!!')
.setColor("GRAY")
.setTimestamp()
.setDescription('')
    .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`)
return message.channel.send(Embed)
.then; 
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: ['kral'], 
    permLevel: 0 
};
  exports.help = {
    name: 'kralol', 
    description: 'kral ol', 
    usage: 'kralol'
};