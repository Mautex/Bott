const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => { 


  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.MessageEmbed()

let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Murat-Eren Yardım Menüsü',`
==============================================
:hite_small_square: | **!test:** = botun çalıştığınız yada çalışmadığı söyler
:white_small_square: | **!oylama:** = oyalma yaprsınız
:white_small_square: | **!yaz:** = istediğiniz yazıyı yazar
:white_small_square: | **!türk:** = türk gif atar
:white_small_square: | **!toplamkomut:** = toplam komutu gösterir
:white_small_square: | **!ping:** = botun pingini gösterir
:white_small_square: | **!yazan-kazanır:** = verilen cümleyi ilk yazan kazanır
:white_small_square: | **!nuke:** = yazılan kanala silip yeniden aynı şekilde kurur
:white_small_square: | **!kick:** = etiketlediğiniz kişiyi sunucudan atar
:white_small_square: | **!kapaklaflar:** = rastgele kapak laf söyler
:white_small_square: | **!inek:** = inek gif atar
:white_small_square: | **!espri:** = espri yapar
:white_small_square: | **!ban:** = etiketlediğiniz kişiyi banlar
:white_small_square: | **!ara155:** = polis gelir
:white_small_square: | **!alkış:** = sizi alkışlar
:white_small_square: | **!türk:** = türk gif atar
:white_small_square: | **!a101:** = :D
:white_small_square: | **!yavaşmod:** = belittiğiniz sayıda kanalı yavaşlatır
:white_small_square: | **!token:** = sana tokenimi veririm
:white_small_square: | **!sunucubilgi:** = sunucuhakkında bilgi verir
:white_small_square: | **!sil:** = belittiğiniz sayıda mesaj siler
:white_small_square: | **!atatürk:** = o7
:white_small_square: | **!avatar:** = avatarınızı gsterir
:white_small_square: | **!botbilgi:** = botun bilgisini gösterir
:white_small_square: | **!üyedurum:** = toplam üye sayısını göterir
:white_small_square: | **!sunucuresmi:** = sunucunun resmini gösterir
:white_small_square: | **!id:** = istediğiniz kişinin idsini verir
:white_small_square: | **!kralol:** = kral olursun
:white_small_square: | **!kedi:** = kedi gif 
:white_small_square: | **!oy:** = oy linkimi veiririm ( kodlardan ayarla oy linkini)
:white_small_square: | **!salak:** = salak gif atar :D
:white_small_square: | **!korona :** = korona sayısını gösterir
:white_small_square: | **!bansay:** = toplam ban sayısını gösterir
:white_small_square: | **!yapımcım:** = yapımcımı gösterir
:white_small_square: | **!aşkölçer:** = etiketleiğiniz kişiyle aşk derecenizi gösterir
:white_small_square: | **!bug-bildir:** = botun yapımcısına bug bildirir
:white_small_square: | **!mute:** = etiketlediğiniz kişiyi muteler
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