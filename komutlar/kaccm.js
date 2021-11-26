const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.author.id === ayarlar.sahip) {
    message.channel.send('Reis o kadar kudretlisin ki olcemedik.')
  } else {
  
   message.channel.send('Bir dakika abi...').then(message => {
   var espriler = [' **Senin Alet  18CM ** :eggplant: ' ,'**Senin Alet  11CM ** :eggplant:' ,'**Senin Alet 32CM  ** :eggplant:' ,'**Senin Alet  35CM ** :eggplant:' ,'**Senin Alet  8CM  ** :eggplant:' ,'**Senin Alet  65CM  ** :eggplant:' ,'**Senin Alet 5CM  ** :eggplant:' ,'**Senin Alet 31CM  ** :eggplant:' ,'**Senin Alet  14CM ** :eggplant:' ,'**Senin Alet  1CM ** :eggplant:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
          message.edit(`${espri}`);
 });
  }
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'kaç-cm'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};