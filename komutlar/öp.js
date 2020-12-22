const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir üyeyi etiketlemelisin!`).setColor(message.guild.me.displayColor));
	
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (message.guild.me.displayColor)
	.setDescription( message.author.username+` adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü.` )
	
	.setImage(`https://i.kym-cdn.com/photos/images/original/000/986/968/2f5.gif`)
  return message.channel.sendEmbed(embed);
  message.react('696782791748223069')


};
exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
  kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'öp',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'öp'
};