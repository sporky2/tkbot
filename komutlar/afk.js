const db = require("quick.db")

exports.run = function(client, message, args) {

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  if(!REASON) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Afk moduna girebilmen için bir sebep belirtmelisin!`).setColor(message.guild.me.displayColor));


  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
   message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${REASON} sebebi ile afk moduna girdin!`).setColor(message.guild.me.displayColor));
  message.delete();
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  kategori: "kullanıcı",
  permLevel: 0 
};

exports.help = {
  name: 'afk', 
  description: 'Kullanıcııyı afk moduna sokar.',
  usage: 'afk <sebep>'
};