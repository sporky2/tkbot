const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, utils) => {
  
 

  let user = message.mentions.members.first() || message.author;

  let userpara= db.fetch(`para_${message.guild.id}_${user.id}`)

  if (userpara === null) ampara = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let paraEmbed = new Discord.RichEmbed()
  .setColor(message.guild.me.displayColor)

  .setDescription(`**${user}'nın Parası**\n\nCepte: ${userpara}\nBanka: ${bank}\n**Ekonomi Botu**`);
  //ewin
 message.channel.send(paraEmbed)
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["para","bakiye"],
  permLevel: 0 
};

exports.help = {
  name: 'para',
  description: '',
  usage: ''
};