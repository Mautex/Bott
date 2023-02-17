const Discord = require ("discord.js");
exports.run = (client, message) => {
    let deathhcodeteam = new Discord.MessageEmbed()
    message.channel.send(deathhcodeteam)
    };
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: ['oy-linkim'], 
    permLevel: 0 
};
  exports.help = {
    name: 'oy', 
    description: 'Deathh code team', 
    usage: 'oy'
};