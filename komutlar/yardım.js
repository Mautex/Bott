const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => { 


  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.MessageEmbed()

let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Murat-Eren Yardım Menüsü',`
==============================================
| **!test:** = botun çalıştığınız yada çalışmadığı söyler
| **!oylama:** = oyalma yaprsınız
| **!yaz:** = istediğiniz yazıyı yazar
| **!türk:** = türk gif atar
| **!toplamkomut:** = toplam komutu gösterir
| **!ping:** = botun pingini gösterir
| **!yazan-kazanır:** = verilen cümleyi ilk yazan kazanır
| **!nuke:** = yazılan kanala silip yeniden aynı şekilde kurur
| **!kick:** = etiketlediğiniz kişiyi sunucudan atar
| **!kapaklaflar:** = rastgele kapak laf söyler
| **!inek:** = inek gif atar
| **!espri:** = espri yapar
| **!ban:** = etiketlediğiniz kişiyi banlar
| **!ara155:** = polis gelir
| **!alkış:** = sizi alkışlar
| **!türk:** = türk gif atar
| **!a101:** = :D
| **!yavaşmod:** = belittiğiniz sayıda kanalı yavaşlatır
| **!token:** = sana tokenimi veririm
| **!sunucubilgi:** = sunucuhakkında bilgi verir
| **!sil:** = belittiğiniz sayıda mesaj siler
| **!atatürk:** = o7
| **!avatar:** = avatarınızı gsterir
| **!botbilgi:** = botun bilgisini gösterir
| **!üyedurum:** = toplam üye sayısını göterir
| **!sunucuresmi:** = sunucunun resmini gösterir
| **!id:** = istediğiniz kişinin idsini verir
| **!kralol:** = kral olursun
| **!kedi:** = kedi gif 
| **!oy:** = oy linkimi veiririm ( kodlardan ayarla oy linkini)
| **!salak:** = salak gif atar :D
| **!korona :** = korona sayısını gösterir
| **!bansay:** = toplam ban sayısını gösterir
| **!yapımcım:** = yapımcımı gösterir
| **!aşkölçer:** = etiketleiğiniz kişiyle aşk derecenizi gösterir
| **!bug-bildir:** = botun yapımcısına bug bildirir
| **!mute:** = etiketlediğiniz kişiyi muteler
===============================================
`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/821825276232728576/821831310213382264/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  category: "yardım",
    description: "yardım"
};