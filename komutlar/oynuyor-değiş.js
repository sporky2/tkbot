const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '231493562284376064') return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için gerekli yetkin bulunmamakta!`).setColor(message.guild.me.displayColor));
  
      const sayMessage = args.slice(1).join(` `);
	  const oynuyor = args[0];
	  const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord iOS'

      client.user.setActivity(sayMessage, { type: oynuyor, browser: "Discord iOS" });
      return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Durum mesajı **${sayMessage}**, oynuyor durumu **${oynuyor}** olarak değiştirildi!`).setColor(message.guild.me.displayColor));
      
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oynuyor-değiştir", "oynuyor-mesaj", "oynuyor"],
  permLevel: 0
};

exports.help = {
  name: 'oyundeğiş',
  description: 'Botun pingini gösterir.',
  usage: 'oyundeğiş'
};