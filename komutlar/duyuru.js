const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerek .");

    let split = '|';

    if(!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir duyuru metni belirtmelisin!`).setColor(message.guild.me.displayColor));


    args = args.join(' ').split(split);

    for (var i = 0; i < args.length; i++) args[i] = args[0].trim();

    if(args[2]) args[2] = parseInt(`0x${args[2]}`);

    let option = {
        title: args[0] || 'Duyuru Sistemi',
        embedColor: message.guild.me.displayColor,
        icon: ``
    }

    const xd = new Discord.RichEmbed()
        .setColor(message.guild.me.displayColor)
        .setTitle(option.title)

    if(option.message) xd.setDescription(option.message);

    message.delete();

    let duyuru = new Discord.RichEmbed()
	.setAuthor(message.guild.name + ' Duyuru')
    .setThumbnail(message.guild.iconURL,)
	.setColor(message.guild.me.displayColor)
    .setTimestamp()
    .setTitle(option.title)
    .setFooter(message.author.tag + "duyurdu.", message.author.avatarURL)
    message.channel.send(duyuru);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru',"duyuru-yap","duyuruyap"],
  kategori: "ayarlar",
  permLevel: 3
};

exports.help = {
    name: 'duyuru',
    description: 'Duyuru yapar',
    usage: 'duyuru <mesajınız>'
}