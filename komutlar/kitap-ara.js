const Discord = require('discord.js')
const request = require('node-superfetch')
const moment = require('moment')
  const db = require('quick.db')
const { GOOGLE_KEY } = process.env
 
exports.run = async (client, message, args) => {
   
 
 
        if (!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Aramak istediğin kitabın adını belirtmelisin!`).setColor(message.guild.me.displayColor));
 
        const kitap = args.join(" ")
 
        try {
                const { body } = await request
                        .get('https://www.googleapis.com/books/v1/volumes')
                        .query({
                                apiKey: GOOGLE_KEY,
                                q: kitap,
                                maxResults: 1,
                                printType: 'books'
                        });
 
                if(!body.items)return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin kitap bulunamadı!`).setColor(message.guild.me.displayColor));
       
                const data = body.items[0].volumeInfo;
 
                const embed = new Discord.RichEmbed()
                        .setAuthor(`${data.title} | Kitap bilgileri`, "https://i.imgur.com/N3oHABo.png", `https://books.google.com.tr/`)
                        .addField('Yazar', data.authors || 'Bilinmiyor')
                        if(!data.publishedDate) {
                                embed.addField('Yayın tarihi', 'Bulunamadı')
                        } else {
                                embed.addField('Yayın tarihi', data.publishedDate)
                        }
                        embed.addField('Sayfa sayısı', data.pageCount || 'Bulunamadı')
                        if(data.imageLinks) {
                                embed.setThumbnail(`${data.imageLinks ? data.imageLinks.thumbnail : null}`)
                        }
                        embed.setColor(message.guild.me.displayColor)
                message.channel.send({embed})
        } catch (err) {
                message.channel.send(`HATA: ${err}`)
        }


};
exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['kitap', 'kitapara'],
        permLevel: 0,
        kategori: "genel",
};
 
exports.help = {
        name: 'kitap-ara',
        description: 'Yazılan kitabın bilgisini gösterir.',
        usage: 'kitap-ara <kitap ismi>',
};