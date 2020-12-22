const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const db = require("quick.db");

  const x = args.slice(0).join(" ");

  if (!x) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir oylama içeriği belirtmelisin!`).setColor(message.guild.me.displayColor));

  // Create Embed
  const embed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
      .setThumbnail(message.guild.iconURL)
    .setAuthor(`${client.user.username} - Oylama sistemi`)
    .addField("Oylama", x);
  let msg = await message.channel.send(embed).then(function(msg) {
    setTimeout(() => msg.react("774039712679198722"), 100)
    setTimeout(() => msg.react("774006790282674198"), 200)

  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["anket", "oylama-yap", "anket-aç"],
  permLevel: 2,
  kategori: "moderasyon"
};

exports.help = {
  name: "oylama",
  description: "Sunucunuzda oylama yapmanızı sağlar.",
  usage: "oylama <mesaj>"
};