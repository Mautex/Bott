const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const api = require('node-fetch')

exports.run = (client, message, args) => {
 if(!args[0]) return message.reply("**Bir lokasyon belirtilmedi!**")
    var token = ayarlar.lokasyonkey
    
    if(!args[1]) {
      var zoom = 10
    }
  
    if(args[1]) {
      if (args[1] > 23) return message.reply("**Uyari: Maksimum yakinlastirma orani 23'tur.**") 
      zoom = args[1]
    }
    
       if(isNaN(zoom)){
    return message.channel.send('**Yakinlastirma seviyesi sayi olmak zorunda!**')
  }
    const encodedURI = encodedURI(`https://us1.locationiq.com/v1/search.php?key=${token}&q=${args[1].toLowerCase()}&limit=1&accept-language=&countrycodes=&dedupe=0&format=json`);
    
try {
     api(encodedURI)
          .then(res => res.json()).then(body => {
          let { type } = body;

      if(body.error === "Unable to geocode") {
        const geoembed = new Discord.MessageEmbed
        .setTitle("Hata ❎")
        .setDescription("**Bu lokasyon goruntulenemiyor ve ya yok.**")
        .setColor("RED")
        return message.channel.send(geoembed)
      }
      
       const embed = new Discord.MessageEmbed() 
       .setAuthor(`${args[0]} İçin Gösterilen Trafik Bilgisi`)
       .setDescription(`**Zoom: ${zoom}` + "\r\n" + "\r\n" + `Gelen verilere gore:**`)
       .setImage(`https://static-maps.yandex.ru/1.x/?lang=tr&ll=${body[0].lon},${body[0].lat}&size=650,450&z=${zoom}&l=map,trf`)
       message.channel.send(embed)
       console.log(body[0].lat)

     })
   } catch (e) {
      message.channel.send("**Suanda bu hizmet devredisidir!**");
    }
}

exports.conf = {
  aliases: ['trafik-sorgu'],
  permLevel: 0
};

exports.help = {
  name: 'Trafik',
  description: 'Belirtilen lokasyonun trafik bilgisini ceker ve kullaniciya yansitir.',
  usage: '!trafik <lokasyon> <zoom seviyesi>',

};