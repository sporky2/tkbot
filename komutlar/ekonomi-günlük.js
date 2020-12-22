const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
 

  let user = message.author;

  let zaman = 86400000;
  let miktar = 200;

  let gunluk = await db.fetch(`gunluk_${message.guild.id}_${user.id}`);

  if (gunluk !== null && zaman - (Date.now() - gunluk) > 0) {
    let time = ms(zaman - (Date.now() - gunluk));
    message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Günlük ödülünü alabilmen için ${time.hours} Saat ${time.minutes} Dakika ${time.seconds} Saniye beklemelisin!`).setColor(message.guild.me.displayColor));
  } else {
     message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${miktar} para kazandın!`).setColor(message.guild.me.displayColor));

  db.add(`para_${message.guild.id}_${user.id}`, miktar)
  db.set(`gunluk_${message.guild.id}_${user.id}`, Date.now())


  }



};


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["günlük"],
  permLevel: 0 
};

exports.help = {
  name: 'günlük',
  description: '',
  usage: ''
};