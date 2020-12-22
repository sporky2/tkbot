const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için Üyeleri Yasakla yetkisine sahip olmalısın!`).setColor(message.guild.me.displayColor));

  let balak = args.slice(1).join(" ")
  let user = message.mentions.members.first();
  if (!user) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir kullanıcı etiketlemelisin!`).setColor(message.guild.me.displayColor));
  db.add(`para_${message.guild.id}_${user.id}`, balak)
    let balakk = db.fetch(`para_${message.guild.id}_${user.id}`)
  message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${balak} para eklendi, yeni para ${balakk}!`).setColor(message.guild.me.displayColor));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["admin-para-ekle"],
  permLevel: 0
};
exports.help = { name: "paraekle", description: "", usage: "" };
