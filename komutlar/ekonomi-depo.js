const Discord = require("discord.js");
const ms = require("parse-ms");
const db = require("quick.db");
module.exports.run = async (client, message, args) => {
  let user = message.author;

  let member = db.fetch(`para_${message.guild.id}_${user.id}`);
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`);

  if (args[0] == "hepsi") {
    let paray = await db.fetch(`para_${message.guild.id}_${user.id}`);
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`);

    if (paray === 0) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bankaya konacak paran yok!`).setColor(message.guild.me.displayColor));


    db.add(`bank_${message.guild.id}_${user.id}`, paray);
    db.subtract(`para_${message.guild.id}_${user.id}`, paray);
     message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Başarıyla bankaya eklendi!`).setColor(message.guild.me.displayColor));

  } else {

    if (!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bankaya konacak para miktarını belirtmelisin!`).setColor(message.guild.me.displayColor));

    let embed3 = new Discord.RichEmbed()
  .setColor(message.guild.me.displayColor)
  .setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Negatif sayı yazamazsın!`);

  if (args[0].includes('-')) { 
      return message.channel.send(embed3)
  }
  
  if(isNaN(args[0])) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Geçerli bir sayı belirtmelisin!`).setColor(message.guild.me.displayColor));
  
  if(args[1]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Sayıyı boşluk bırakmadan veya araya noktalama işaretleri koymadan yazmalısın!`).setColor(message.guild.me.displayColor));

    if (member < args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin miktarda paran yok!`).setColor(message.guild.me.displayColor));

     message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Bankana ${args[0]} para ekledin!`).setColor(message.guild.me.displayColor));

    db.add(`bank_${message.guild.id}_${user.id}`, args[0]);
    db.subtract(`para_${message.guild.id}_${user.id}`, args[0]);
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["depo","para-yükle", "parayükle", "para-yatır", "parayatır"],
  permLevel: 0
};

exports.help = {
  name: "banka",
  description: "",
  usage: ""
};
