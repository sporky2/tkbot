const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Resim aranıyor...");

    let {body} = await superagent 
    .get('https://aws.random.cat/meow');
    if(!{body}) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir hata oluştu tekrar deneyiniz!`).setColor(message.guild.me.displayColor));

    const embed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
    .setDescription("**"+message.author.username+"**, İşte bir kedi !")
    .setImage(body.file)
    .setTimestamp()
    message.channel.send({embed})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
    name: "kedi",
    description: "Bir kedi resmi gönderir.",
    usage: "<prefix>kedi"
};
