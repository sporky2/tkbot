const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
   
    let user = message.author;

    let author = db.fetch(`para_${message.guild.id}_${user.id}`)

    if (args[0] == 'araba') {
        if (author < 35000) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Araba almak için 35.000 paraya ihtiyacın var!`).setColor(message.guild.me.displayColor));


        db.fetch(`araba_${message.guild.id}_${user.id}`);
        db.add(`araba_${message.guild.id}_${user.id}`, 1)

        db.subtract(`para_${message.guild.id}_${user.id}`, 35000)
         message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** 35.000 paraya araba alındı!`).setColor(message.guild.me.displayColor));




    } else if(args[0] == 'ev') {
        if (author < 120000) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Ev alabilmen için 120.000 paraya ihtiyacın var!`).setColor(message.guild.me.displayColor));


        db.fetch(`ev_${message.guild.id}_${user.id}`)
        db.add(`ev_${message.guild.id}_${user.id}`, 1)

        db.subtract(`para_${message.guild.id}_${user.id}`, 120000)
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** 120.000 paraya ev alındı!`).setColor(message.guild.me.displayColor));
    } else {
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Alacağın eşyayı belirtmelisin! | ev/araba`).setColor(message.guild.me.displayColor));

    }

}
  
  
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["al", "satın-al", "satınal"],
  permLevel: 0 
};

exports.help = {
  name: 'al',
  description: '',
  usage: ''
};