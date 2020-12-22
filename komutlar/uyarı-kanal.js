const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için Yönetici yetkisine sahip olmalısın!`).setColor(message.guild.me.displayColor));

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`uyarilog_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Uyarı-Log kanalı zaten ayarlı değil!`).setColor(message.guild.me.displayColor));
    db.delete(`uyarilog_${message.guild.id}`)
   message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Uyarı-Log kanalı başarıyla sıfırlandı!`).setColor(message.guild.me.displayColor));
  
    return
  }
  
if (!logk) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir kanal etiketlemelisin!`).setColor(message.guild.me.displayColor));

db.set(`uyarilog_${message.guild.id}`, logk.id)
message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Uyarı-Log kanalı başarıyla ${logk} olarak ayarlandı!`).setColor(message.guild.me.displayColor));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ "uyarı-log", "uyarılog", "uyarıayarla" ],
  permLevel: 2,
  kategori: "ayarlar"
};

exports.help = {
  name: "uyarı-log",
  description: "Uyarı-Log kanalını belirler. (Sıfırlamak için !uyarılog sıfırla)",
  usage: "uyarı-log <#kanal>"
};
   