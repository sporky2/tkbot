const Discord = require("discord.js");
var cowsay = require("cowsay");
const db = require('quick.db');
exports.run = (client, msg, args) => {
  
  
   if(!args[0])return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir metin belirtmelisin!`).setColor(message.guild.me.displayColor));
  
  
    let text = args.join(" ");
msg.channel.send("```" + cowsay.say({
        text : text
    }) + "```")
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'cowsay',
  description: 'İstediğiniz Şeyi İnek Söylermiş Gibi Yazar.',
  usage: 'cowsay [yazı]'
};