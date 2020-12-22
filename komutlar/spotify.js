const Discord = require ('discord.js');
module.exports.run = async (client, message, args) => {
 
 
 
 
    var user = message.mentions.users.first() || message.author;
    if (!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Spotify'dan şarkı dinleyen bir üyeyi etiketlemelisin!`).setColor(message.guild.me.displayColor));
 
    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        try {
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;
 
            const embed = new Discord.RichEmbed()
                .setAuthor('Spotify Şarkı Bilgisi', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png')
                .setColor(message.guild.me.displayColor)
                .setThumbnail(trackImg)
                .setDescription(`
\ **Spotify**'da dinlediği şarkı;  \**${trackName}**\n
\ **Spotify**'da dinlediği albüm;  \**${trackAlbum}**\n
\ **Spotify**'da dinlediği sanatçı;  \**${trackAuthor}**\n
`)
               .addField('Spotify\'da Dinlediği Şarkı Linki;', `**[${trackUrl}](${trackUrl})**`, false);
 
            return message.channel.send(embed);
 
        } catch (error) {
             message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin kullanıcı spotifydan şarkı dinlemiyor!`).setColor(message.guild.me.displayColor));
       }
 
   } else {
       message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin kullanıcı Discord hesabına Spotify hesabını bağlamamış!`).setColor(message.guild.me.displayColor));
   }
 
 
}
 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['spo', 'spoti', 'soti', 'spotif', 'spotifyy'],
 permLevel: 0,
 kategori: 'genel'
};
 
exports.help = {
 name: 'spotify',
 description: 'Bir Kullanıcının Spotify`Da Dinlediği Şarkıyı Gösterir',
 usage: 'spotify'
};