const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let okul = new Date('2021-01-01 00:00:00')
    let zaman = ms(okul - Date.now())
    
    return message.channel.send(new Discord.RichEmbed().setDescription(`Yılbaşının kutlanmasına **${zaman.days}** Gün **${zaman.hours}** Saat **${zaman.minutes}** Dakika kaldı!`).setColor(message.guild.me.displayColor));

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'yılbaşı',
  description: 'Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.',
  usage: 'okulsayaç'
};