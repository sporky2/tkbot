const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
  const espri = await get('https://api.emirkabal.com/espri').set('Authorization', '5-q9yc1alvs0a6h-cttntypyt2jnzzn--v5swe8xjl0i-2zefgn0-7w449q2rmtv');
  if (!espri || !espri.body || !espri.body.mesaj) return console.log("Hata oluştu,Lütfen API anahtarınızı kontrol ediniz.");
  message.channel.send(espri.body.mesaj)


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri', 'espri-yap'],
  kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri yapar.',
  usage: 'espri'
};