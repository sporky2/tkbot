const Discord = require("discord.js");
const ms = require("ms");

exports.run = (client, message, [...msgid]) => {

    let messageID = msgid.join(" ");
    client.giveawaysManager.delete(messageID).then(() => {
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Çekiliş başarıyla sona erdi!`).setColor(message.guild.me.displayColor));

     }).catch((err) => {
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin ID'deki çekiliş mevcut değil!`).setColor(message.guild.me.displayColor));
    });
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çekiliş-bitti', 'giveaway-end'],
    permLevel: 0
}

exports.help = {
    name: 'çekiliş-bitir',
    description: `Anti Bot sisteminin aktif edilmesini sağlayan komut.`,
    usage: 'anti-bot-sistemi #kanal',
}