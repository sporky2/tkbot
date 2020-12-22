const ms = require('ms');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES'))return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için Mesajları Yönet yetkisine sahip olmalısın!`).setColor(message.guild.me.displayColor));

    // If no message ID or giveaway name is specified
    if(!args[0])return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Tekrarlanacak çekilişin ID'sini belirtmelisin!`).setColor(message.guild.me.displayColor));

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway)return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin mesajda çekiliş yapılmamış!`).setColor(message.guild.me.displayColor));
  
    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID, {
    winnerCount: 0,
    messages: {
        congrat: `${client.emojis.get(client.emojiler.tik)}` +  " | **Başarılı** Yeni Kazanan : {winners} Tebrikler!",
        error: `${client.emojis.get(client.emojiler.x)}` + "Bir kazanan belirlenemedi!"
    }
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
         message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu çekiliş henüz sona ermemiş!`).setColor(message.guild.me.displayColor));
        } else {
            console.error(e);
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir hata oluştu!`).setColor(message.guild.me.displayColor));
        }
    });

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çekiliş-yeniden', 'çekililyeniden'],
    permLevel: 0
}

exports.help = {
    name: 'reroll',
    description: `Anti Bot sisteminin aktif edilmesini sağlayan komut.`,
    usage: 'anti-bot-sistemi #kanal',
}