const Discord = require('discord.js')
exports.run = (client, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Banlanan üye bulunamadı!`).setColor(message.guild.me.displayColor));

     else
     {
       const embed = new Discord.RichEmbed()
       .setTitle(":no_entry_sign: Banlistesi | Sunucudan Banlananlar")
       .setColor("RED");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, "`"+ `_______________________` + "`");
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste"],
  permLevel: 0,
  kategori: 'genel'
};
module.exports.help = {
  name: 'banlananlar',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'banlananlar'
};
