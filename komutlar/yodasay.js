const Discord = require("discord.js");
var yodasay = require('yodasay');
exports.run = (client, message, args) => {


    if(!args[0])return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir metin belirtmelisin!`).setColor(message.guild.me.displayColor));

    
    let text = args.join(" ");

  message.channel.send("```" + yodasay.say({
        text : text
    }) + "```")
  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yodasay'],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'yoda',
  description: 'İstediğiniz Şeyi yoda Söylermiş Gibi Yazar.',
  usage: 'yodasay [yazı]'
};