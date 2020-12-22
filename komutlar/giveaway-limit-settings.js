const db = require('quick.db')
const fs = require('fs');
const Discord = require('discord.js')
var limitJSON = JSON.parse(fs.readFileSync("./json/limit.json", "utf8"));

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için Mesajları Yönet yetkisine sahip olmalısın!`).setColor(message.guild.me.displayColor));
    }
  
    // If no message ID or giveaway name is specified
    if(!args[0])return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Çekilişin katılımcı limiti için bir sayı belirtmelisin!`).setColor(message.guild.me.displayColor));
    
  var limit = args[0]
  if(!limit || isNaN(limit))return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir sayı belirtmelisin!`).setColor(message.guild.me.displayColor));
  
  limitJSON[message.guild.id] = {
    limit: limit
  }
  
  fs.writeFile("./json/limit.json", JSON.stringify(limitJSON), (err) => {
			if (err) console.log(err)
		});
  
      return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Çekilişin katılımcı limiti başarıyla **${args[0]}** olarak ayarlandı!`).setColor(message.guild.me.displayColor));
      
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çekiliş-limit-ayarla', 'çekiliş-limits'],
    permLevel: 0
}

exports.help = {
    name: 'çekiliş-limit',
    description: `Anti Bot sisteminin aktif edilmesini sağlayan komut.`,
    usage: 'anti-bot-sistemi #kanal',
}