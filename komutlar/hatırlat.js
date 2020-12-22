const Discord = require("discord.js");
const db = require("quick.db")
const ms = require("ms")

exports.run = async (client, message, args) => {
 
 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için Üyeleri Yasakla yetkisine sahip olmalısın!`).setColor(message.guild.me.displayColor));
 
	
	var time = args[0],
		content = args.splice(1).join(" ")
	if (!time) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir süre belirtmelisin! | 1s (saniye), 1m (dakika), 1h (saat), 1d (gün)`).setColor(message.guild.me.displayColor));
	if (!content) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Hatırlatılacak metni belirtmelisin!`).setColor(message.guild.me.displayColor));
	
 message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Hatırlatıcı oluşturuldu!`).setColor(message.guild.me.displayColor));
	message.delete()
	const recallDate = {
		time: ms(time) + Date.now(),
		content: `${content}`
	}
	console.log(recallDate)
	db.set(`recall_${message.author.id}`, recallDate)


};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "hatırlat",
	description: "Yardım komutu."
};