const ms = require('ms')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için Mesajları Yönet yetkisine sahip olmalısın!`).setColor(message.guild.me.displayColor));
    }

    let giveawayChannel = message.mentions.channels.first();
    if (!giveawayChannel) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Çekiliş yapacağın kanalı etiketlemelisin!`).setColor(message.guild.me.displayColor));


    let giveawayDuration = args[1];
    if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Çekilişin süresini belirtmelisin!`).setColor(message.guild.me.displayColor));

    let giveawayNumberWinners = args[2];
    if (isNaN(giveawayNumberWinners))return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Çekilişin kazanan sayısını belirtmelisin!`).setColor(message.guild.me.displayColor));

    let giveawayPrize = args.slice(3).join(' ');
    if (!giveawayPrize) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Çekilişin ödülünü belirtmelisin!`).setColor(message.guild.me.displayColor));

    client.giveawaysManager.start(giveawayChannel, {
        messages: {
            giveaway: `${client.emojis.get(client.emojiler.fun)} | ` + "**Çekiliş Başladı**",
            giveawayEnded: "🎉 **Çekiliş Sona Erdi**",
            timeRemaining: "Kalan Süre • **{duration}**!",
            inviteToParticipate: 'Katılmak için 🎉 tepkisine tıkla!',
            winMessage: `Tebrikler, {winners} Ödülü **{prize}** olan çekilişi kazandınız!`,
            embedFooter: "Çekiliş",
            noWinner: `Bir kazanan belirlenemedi!`,
            winners: `Kazanan(lar)`,
            endedAt: "Bitiş Tarihi",
            units: {
                seconds: "saniye",
                minutes: "dakika",
                hours: "saat",
                days: "gün",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        },
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayNumberWinners
    });
    message.delete()
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çekiliş-başlat', 'go-çekiliş', 'çekiliş-yap'],
    permLevel: 0
}

exports.help = {
    name: 'start',
    description: `Anti Bot sisteminin aktif edilmesini sağlayan komut.`,
    usage: 'anti-bot-sistemi #kanal',
}