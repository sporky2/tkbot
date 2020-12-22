const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir kullanıcı etiketlemelisin!`).setColor(message.guild.me.displayColor));

let user = message.mentions.members.first()
let targetuser = await db.fetch(`para_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
let author2 = await db.fetch(`para_${message.guild.id}_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));
if (message.mentions.users.first().bot) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Botları soyamazsın!`).setColor(message.guild.me.displayColor));

    message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Yakın zamanda soygun yapmışsın tekrar yapabilmen için ${time.minutes} Dakika ${time.seconds} saniye beklemelisin!`).setColor(message.guild.me.displayColor));

} else {


if (author2 < 200) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Soyacağın kişide min 200 para olmalı!`).setColor(message.guild.me.displayColor));


if (targetuser < 0)return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu kişinin hiç parası yok!`).setColor(message.guild.me.displayColor));




    const random = Math.floor(Math.random() * 200) + 1;

     message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${user} adlı kişiyi soydun ve ${random} para kazandın!`).setColor(message.guild.me.displayColor));


db.subtract(`para_${message.guild.id}_${user.id}`, random)
db.add(`para_${message.guild.id}_${message.author.id}`, random)
db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now())
  
};
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["çal", 'soy'],
  permLevel: 0 
};

exports.help = {
  name: 'çal',
  description: '',
  usage: ''
};