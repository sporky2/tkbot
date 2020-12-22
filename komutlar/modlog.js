const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için Yönetici yetkisine sahip olmalısın!`).setColor(message.guild.me.displayColor));

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Mod-Log kanalı zaten ayarlı değil!`).setColor(message.guild.me.displayColor));
    db.delete(`log_${message.guild.id}`)
   
    
      message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Mod-Log kanalı sıfırlandı!`).setColor(message.guild.me.displayColor));
  
    return
  }
  
if (!logk) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir kanal belirtmelisin!`).setColor(message.guild.me.displayColor));

db.set(`log_${message.guild.id}`, logk.id)

 message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Mod-Log kanalı ayarlandı!`).setColor(message.guild.me.displayColor));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ "mod-log", "modlog", "log-ayarlama", "logayarla", "log","vkanal", "kayıtkanalı" ],
  permLevel: 2,
  kategori: "ayarlar"
};

exports.help = {
  name: "mod-log",
  description: "Mod-Log kanalını belirler. (Sıfırlamak için !modlog sıfırla)",
  usage: "mod-log <#kanal>"
};
   