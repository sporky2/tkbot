const Discord = require('discord.js')
const numerals = {
                                        "M": 1000,
                                        "CM": 900,
                                        "D": 500,
                                        "CD": 400,
                                        "C": 100,
                                        "XC": 90,
                                        "L": 50,
                                        "XL": 40,
                                        "X": 10,
                                        "IX": 9,
                                        "V": 5,
                                        "IV": 4,
                                        "I": 1
                                }
exports.run = (client, message, args) => {
        if(!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Geçerli bir sayı belirtmelisin!`).setColor(message.guild.me.displayColor));
 
        if(isNaN(args[0])) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Geçerli bir sayı belirtmelisin!`).setColor(message.guild.me.displayColor));
       
        if(args[0] > 999999) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** 999.999 veya daha küçük bir sayı belirtmelisin!`).setColor(message.guild.me.displayColor));
 
        const sayi = args[0]
 
        if(args[0] === 0) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin sayının herhangi bir karşılığı yok!`).setColor(message.guild.me.displayColor));
 
        let result = '';
        for (const [numeral, value] of Object.entries(numerals)) {
                while (args[0] >= value) {
                        result += numeral;
                        args[0] -= value;
                }
        }
        const embed = new Discord.RichEmbed()
                .addField('Yazılan Sayı', sayi)
                .addField('Romen Karşılığı', result)
                .setColor(message.guild.me.displayColor)
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['roman'],
        kategori: 'eğlence',
        permLevel: 0
}
 
exports.help = {
        name: 'romen',
        description: 'Yazdığınız sayının romen karşılığını yazar.',
        usage: 'romen [sayı]'
}