const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let current_datetime = new Date()
    let formatted_date =  current_datetime.getDate() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear() 
    let uyaran = message.author.username
    const user = message.mentions.users.first() || client.users.get(args[0])
    const reason = args.splice(1).join(" ")

    if(!user) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Uyaracağın üyeyi etiketlemelisin!`).setColor(message.guild.me.displayColor));
    if(!reason) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Uyarma sebebi girmelisin!`).setColor(message.guild.me.displayColor));

    
    var uyari = {
        date: formatted_date,
        reason: reason,
        uyaran: uyaran
    }


  const embed = new Discord.RichEmbed()
  .setColor("#7c007c")
  .addField('Yapılan İşlem', 'Uyarma')
  .addField('Uyarılan Kullanıcı', `${user.tag} (${user.id})`)
  .addField('Uyaran Yetkili', `${message.author.username}#${message.author.discriminator} (${user.id})`)
  .addField('Uyarı Sebebi', "```" + reason + "```")
  //uyarılog.send(embed);



    console.log(uyari)
    db.push(`uyari_${user.id}_${message.guild.id}`, uyari)
 message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** ${user} adlı kullanıcı başarıyla ${reason} sebebiyle uyarıldı!`).setColor(message.guild.me.displayColor));
	
	message.guild.members.get(user.id).send(`**${message.guild.name}** adlı sunucuda **${reason}** sebebi ile uyarıldın! \nKuralları çiğnemeye devam eder isen susturulabilir, atılabilir veya yasaklanabilirsin!\nGeçmiş uyarılarına !uyarılar komutuyla ulaşabilirsin`)


  const uyarı1 = "677313291155931218";
  const uyarı2 = "690366368020693032";
  const uyarı3 = "698224751122055239";  
  

if(message.guild.members.get(user.id).roles.has(uyarı3)){
return;
} else if ( message.guild.members.get(user.id).roles.has(uyarı2)){
  message.guild.members.get(user.id).removeRole(uyarı2)
  message.guild.members.get(user.id).addRole(uyarı3)
} else if( message.guild.members.get(user.id).roles.has(uyarı1)){
  message.guild.members.get(user.id).removeRole(uyarı1)
  message.guild.members.get(user.id).addRole(uyarı2)
} else {
  message.guild.members.get(user.id).addRole(uyarı1)
}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "uyar",
  description: "Yardım komutu."
};
