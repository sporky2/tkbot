const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
    if (!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir şehir adı belirtmelisin!`).setColor(message.guild.me.displayColor));

    const konum = args.join(" ")

    
    const embed = new Discord.RichEmbed()
          .setTitle(`${konum} Hava Durumu`)
          .setTimestamp()
         .setColor(message.guild.me.displayColor)
         .setImage(`http://wttr.in/${konum}_0tqp_lang=tr.png`)
         message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hava', 'hava-durumu', 'havabilgisi', 'hava-bilgisi', 'weather', 'weatherforecast'],
    permLevel: 0
}

exports.help = {
    name: 'havadurumu',
    description: 'Yazılan konumun hava durumu bilgisini gösterir.',
    usage: 'havadurumu'}