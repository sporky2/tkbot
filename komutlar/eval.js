const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(message.author.id !== '691409317714198559') return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için gerekli yetkin bulunmamakta!`).setColor(message.guild.me.displayColor));
  
  const tokenuyari = 'TOKEN'
  
  const ayarlar = client.ayarlar
  
  let bot = client;
  
	if(!args[0]) {
		const embed = new Discord.RichEmbed()
			.setDescription("kod giriniz", message.content.slice(2))
			.setColor("RANDOM")
		message.channel.send(embed)
		return
	}
	const code = args.join(' ');
	function clean(text) {
		if (typeof text !== 'string')
			text = require('util').inspect(text, { depth: 0 })
		text = text
			.replace(/`/g, '`' + String.fromCharCode(8203))
			.replace(/@/g, '@' + String.fromCharCode(8203))
		return text;
	};
	async function send(embed) {
		message.channel.send(embed);
	}

	const evalEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
	try {
		var evaled = clean(await eval(code));
    
    
    if(evaled.length >= 1024) {
    
    
     message.channel.send(evaled, {split: true, code: "js"})

    return
    }
    
    if (code === "2+2" || code === "2 + 2" || code === "Math.floor(2+2)" || code === "Math.floor(2 + 2)") { 
      var evaled = "5"
    };
    
    if(evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace(client.token, tokenuyari).replace(process.env.PROJECT_INVITE_TOKEN, tokenuyari);
		if (evaled.constructor.name === 'Promise') evalEmbed.setDescription(`\`\`\`js\n${evaled.replace(client.token, tokenuyari).replace(process.env.PROJECT_INVITE_TOKEN, tokenuyari)}\n\`\`\``)
		else evalEmbed.setDescription(`\`\`\`xl\n${evaled.replace(client.token, tokenuyari).replace(process.env.PROJECT_INVITE_TOKEN, tokenuyari)}\n\`\`\``)
		const newEmbed = new Discord.RichEmbed()
			.addField(`📥 GİRİŞ`, `\`\`\`js\n${code}\n\`\`\``)
			.addField(`📤 ÇIKIŞ`, `\`\`\`js\n${evaled.replace(client.token, tokenuyari).replace(process.env.PROJECT_INVITE_TOKEN, tokenuyari)}\n\`\`\``)
			.setColor("RANDOM")
		message.channel.send(newEmbed,);
	}
	catch (err) {
		evalEmbed.addField(`${x} HATA`, `\`\`\`js\n${err}\n\`\`\``);
		evalEmbed.setColor('RANDOM');
		message.channel.send(evalEmbed);
	}
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ["kod", "kod-çalıştır"],
	permLevel: 0,
	kategori: 'yapımcı'
}

exports.help = {
	name: 'eval',
	description: 'Yazılan kodu çalıştırır.',
	usage: 'eval <kod>',
 
}