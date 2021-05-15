const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/790999702765961258/791775226186563635/6faf3b2ff385f75cc6b46e61e60c1979.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `!davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `!oyver`= Botumuza Oy verebilirsin**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 
:white_small_square: | **!test:** = botun çalıştığınız yada çalışmadığı söyler
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
:white_small_square: | **!a101:** = :D
`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:white_small_square: | ** Bot Her Gün Güncelleniyor!**.
:white_small_square: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/74MZyfZ24d) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=791609110658547782&permissions=8&scope=bot) \n > » [Oy Verebilirsiniz](https://top.gg/bot/791609110658547782/vote) `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
