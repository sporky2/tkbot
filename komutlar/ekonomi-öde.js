const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() 

  let member = db.fetch(`para_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.RichEmbed()
  .setColor(message.guild.me.displayColor)
  .setDescription(` Ödeyeceğin kişiyi etiketle`);

  if (!user) {
      return message.channel.send(embed1)
  }
  
  if (!args[1]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Ödenecek para miktarını belirtmelisin!`).setColor(message.guild.me.displayColor));
  


 
  if (member < args[1]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin miktarda paran yok!`).setColor(message.guild.me.displayColor));

 let embed3 = new Discord.RichEmbed()
  .setColor(message.guild.me.displayColor)
  .setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Negatif sayı yazamazsın!`);

  if (args[0].includes('-')) { 
      return message.channel.send(embed3)
  }
  
  if(isNaN(args[1])) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Geçerli bir sayı belirtmelisin!`).setColor(message.guild.me.displayColor));
  
  if(args[2]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Sayıyı boşluk bırakmadan veya araya noktalama işaretleri koymadan yazmalısın!`).setColor(message.guild.me.displayColor));
 
message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${user.user.username} adlı kişiye ${args[1]} para gönderildi!`).setColor(message.guild.me.displayColor));
  db.add(`para_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`para_${message.guild.id}_${message.author.id}`, args[1])

}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["öde","gönder"],
  permLevel: 0 
};

exports.help = {
  name: 'para-gönder',
  description: '',
  usage: ''
};