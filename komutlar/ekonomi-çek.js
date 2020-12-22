const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (client, message, args) => {
  
  let user = message.author;

  let member = db.fetch(`para_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'hepsi') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`para_${message.guild.id}_${user.id}`, money)
return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Bütün paranı bankadan aldın!`).setColor(message.guild.me.displayColor));
  
  } else {

  if (!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bankadan almak istediğin miktarda parayı belirt!`).setColor(message.guild.me.displayColor));
  
    let embed3 = new Discord.RichEmbed()
  .setColor(message.guild.me.displayColor)
  .setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Negatif sayı yazamazsın!`);

  if (args[0].includes('-')) { 
      return message.channel.send(embed3)
  }
  
  if(isNaN(args[0])) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Geçerli bir sayı belirtmelisin!`).setColor(message.guild.me.displayColor));
  
  if(args[1]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Sayıyı boşluk bırakmadan veya araya noktalama işaretleri koymadan yazmalısın!`).setColor(message.guild.me.displayColor));
  
  if (member2 < args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bankada belirttiğin miktarda paran yok!`).setColor(message.guild.me.displayColor));

   message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${args[0]} parayı bankadan çektin!`).setColor(message.guild.me.displayColor));
  
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`para_${message.guild.id}_${user.id}`, args[0])
  }
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["çek","para-çek","ekonomi-çek"],
  permLevel: 0 
};

exports.help = {
  name: 'çek',
  description: '',
  usage: ''
};