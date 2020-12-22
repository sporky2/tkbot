const Discord = require("discord.js");
const ms = require("ms");

exports.run = (client, message, args) => {
	let messageID = args[0];
  client.giveawaysManager.edit(messageID, {
    newWinnersCount: parseInt(args[1]),
    newPrize: args.slice(2).join(" "),
        addTime: 5000
    }).then(() => {
      return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Çekiliş başarıyla güncellendi!`).setColor(message.guild.me.displayColor));
    }).catch((err) => {
      return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin çekiliş bulunamadı!`).setColor(message.guild.me.displayColor));
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-düzenle', 'giveaway-edit'],
  permLevel:  0
};

exports.help = {
  name: 'çekiliş-editle',
  description: 'Seviye komutlarını listeleyen yardım menüsü.',
  usage: 'seviye-sistemi'
};
