const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (bot, message, args) => {

  const embed54 = new Discord.RichEmbed()
  .setTimestamp()
  .setFooter(bot.user.username+" - Çekiliş Sistemi", bot.user.avatarURL)
  .setAuthor(bot.user.username + "", bot.user.avatarURL)
  .setTitle("Çekiliş Sistemi Ne İşe Yarar?")  
  .setColor(mesaage.guild.me.displayColor)
  .setDescription('Adaletli bir şekilde üyelerinize bir hediye mi vermek istiyorsunuz ? O zaman bu sistem tam size göre. Aşağıda ki komutları kullanarak çekiliş başlatabilirsiniz.  ')
  .addField("Çekiliş Süre Dilimleri:", "**s** Saniye, **m** Dakika, **h** Saat, **d** gün,")
  .addField("!çekiliş-yap", `Çekiliş yapmanzı sağlar.
`, true)

.addField("!çekiliş-düzenle", `Yapdığınız bir çekilişi düzenlemizi sağlar.`)

  .addField("!çekiliş-yeniden", `Yapdığınız bir çekilişi yeniden yapar.`)
  
  .addField("!çekiliş-sil", `Yaptığınız çekilişi silmenizi sağlar.`)

  .addField("!çekiliş-limit", `Çekiliş katılma limitini ayarlar.`)


return message.channel.send(embed54);
 

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekilişsistem', 'çekiliş-yardım'],
  permLevel:  0
};

exports.help = {
  name: 'çekiliş-sistemi',
  description: 'Seviye komutlarını listeleyen yardım menüsü.',
  usage: 'seviye-sistemi'
};
