const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için "MESAJLARI YÖNET" iznine sahip olmalısın!`);
  if (!args[0] || isNaN(args[0])) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Temizlenecek mesaj miktarını belirtmelisin! (Sınırsız sayıda silebiliyor)`).setColor(message.guild.me.displayColor));
  await message.delete();
  let sayi = Number(args[0]);
  let silinen = 0;
  let argsx = args[0];
  for (var i = 0; i < (Math.floor(sayi/100)); i++) {
    await message.channel.bulkDelete(100).then(r => silinen+=r.size);
    sayi = sayi-100;
  };
  if (sayi > 0) await message.channel.bulkDelete(sayi).then(r => silinen+=r.size);
 message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${argsx} adet mesaj silindi!`).setColor(message.guild.me.displayColor)).then(i => i.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle", "sil"],
  permLevel: 0
};

exports.help = { 
  name: 'temizle', 
  description: 'Belirtilen miktarda mesajı temizler. (Sınırsız)',
  usage: 'temizle <miktar>',
  kategori: 'kullanıcı'
};


