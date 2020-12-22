const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author
  
    var uyarilar = db.fetch(`uyari_${user.id}_${message.guild.id}`)
    var warn10="", warnEndless="";

    if(uyarilar === null || !uyarilar) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu kullanıcının mevcut uyarısı yok!`).setColor(message.guild.me.displayColor));

    for (let i = 0; i < uyarilar.length; i++) {
        if (i < 10) if(uyarilar.length ) warn10 += `**${i+1}. Uyarı:**\nSebep: ${uyarilar[i].reason}\nUyaran Yetkili: ${uyarilar[i].uyaran}\nUyarı tarihi: ${uyarilar[i].date}\n\n`
        warnEndless += `${i+1}. [${uyarilar[i].date}] ${uyarilar[i].reason}\n`
    }
    let mention = message.mentions.users.first() || message.author;
    const warnEmbed = new Discord.RichEmbed()
        .setDescription(warn10)
        .setTitle(mention.username + " Kullanıcısının Uyarı Listesi")
        .setColor(message.guild.me.displayColor)
        .setThumbnail(message.guild.iconURL)
    message.channel.send(warnEmbed)
 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyarı-liste"],
  permLevel: 0
};

exports.help = {
  name: "uyarılar",
  description: "Yardım komutu."
};