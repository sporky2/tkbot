const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için Üyeleri Yasakla yetkisine sahip olmalısın!`).setColor(message.guild.me.displayColor));


    const user = message.mentions.users.first() || client.users.get(args[0])
    if(!user) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Uyarı rolünü kaldırmak/düşürmek istediğin üyeyi etiketlemelisin!`).setColor(message.guild.me.displayColor));
    
    const uyarı1 = "677313291155931218";
    const uyarı2 = "690366368020693032";
    const uyarı3 = "698224751122055239";  

  
  
if (message.guild.members.get(user.id).roles.has(uyarı3)) {
  message.guild.members.get(user.id).removeRole(uyarı3)
  message.guild.members.get(user.id).addRole(uyarı2)
 message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${user} adlı kullanıcıbın uyarı rolü 3'ten 2'ye düşürüldü!`).setColor(message.guild.me.displayColor));
} else if (message.guild.members.get(user.id).roles.has(uyarı2)) {
    message.guild.members.get(user.id).removeRole(uyarı2)
    message.guild.members.get(user.id).addRole(uyarı1)
 message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${user} adlı kullanıcının uyarısı 2'den 1'e düşürüldü!`).setColor(message.guild.me.displayColor));
} else if (message.guild.members.get(user.id).roles.has(uyarı1)) {
  message.guild.members.get(user.id).removeRole(uyarı1)
   message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${user} adlı kullanıcının uyarı rolleri silindi!`).setColor(message.guild.me.displayColor));
}





};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "uyarı-kaldır",
  description: "Yardım komutu."
};
