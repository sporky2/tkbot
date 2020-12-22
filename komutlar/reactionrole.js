
const db = require("quick.db");
const Discord = require('discord.js')
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	
    if (!message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bu komutu kullanabilmen için Rolleri Yönet yetkisine sahip olmalısın!`).setColor(message.guild.me.displayColor));
	
    function isCustomEmoji(emoji) {
        return emoji.split(":").length == 1 ? false : true;
      }
      const data = db.get(`reactionRoles_${message.guild.id}`);
if(!args[0])return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir argüman belirtmelisin! | ekle/kaldır/liste`).setColor(message.guild.me.displayColor));

let kategoriler = ['add', 'ekle', 'remove', 'sil', 'kaldır', 'list', 'liste'];
let argüman = args[0]
if(!kategoriler.includes(args[0])) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** ${argüman} adlı kategori mevcut değil! Mevcut kategoriler ekle/kaldır/liste`).setColor(message.guild.me.displayColor));


    if(args[0] === "add" || args[0] === "ekle") {
        if (!args[1])
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir kanal etiketlemelisin!`).setColor(message.guild.me.displayColor));
      if(!args[2]) 
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir mesaj ID'si belirtmelisin!`).setColor(message.guild.me.displayColor));
      if (!args[3])
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir rol etiketlemelisin!`).setColor(message.guild.me.displayColor));
        
      if (!args[4])
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir emoji belirtmelisin!`).setColor(message.guild.me.displayColor));


const rolxd = message.mentions.roles.first().id || message.guild.roles.has(args[3])
      if (!rolxd) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Sunucuda böyle bir rol bulunamadı!`).setColor(message.guild.me.displayColor));

      let channel = message.mentions.channels.first() || message.guild.channels.get(args[1]) ;
      if (!channel)
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin kanal bulunamadı!`).setColor(message.guild.me.displayColor));

        channel.fetchMessage(args[2]).then(msg => {

          if(isCustomEmoji(args[4])) {
          args[4] = args[4].split(":")[1];
          msg.react(message.guild.emojis.find(x => x.name === args[4]).id);
        }
        else if(!isCustomEmoji(args[4])) msg.react(args[4])
      
      const date = { reaction: args[4], message: msg.id, role: rolxd }
      db.push(`reactionRoles_${message.guild.id}`, date);
      return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Emoji-rol başarıyla ayarlandı!`).setColor(message.guild.me.displayColor));
    })
    } 
    else if (args[0] === "remove" || args[0] === "sil" ||args[0] === "kaldır" ) {
     
     const rolxd = message.mentions.roles.first().id || message.guild.roles.has(args[3])
     
      if(!args[1]) 
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Silinecek mesaj ID'si belirtmelisin!`).setColor(message.guild.me.displayColor));
      if (!rolxd)
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Silinecek rol ID'si belirtmelisin!`).setColor(message.guild.me.displayColor));
      if (!args[3])
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Silinecek emojiyi belirtmelisin!`).setColor(message.guild.me.displayColor));

      if (!rolxd)
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Belirttiğin rol Emoji-Rol sistemi için ayarlanmamış!`).setColor(message.guild.me.displayColor));
        
        if(isCustomEmoji(args[3])) args[3] = args[3].split(":")[1];
        const filtered = data.filter(e => e.message !== args[1] && e.reaction !== args[3] && e.role !== rolxd);
    
       message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **Başarılı:** Başarıyla silindi!`).setColor(message.guild.me.displayColor));
      
      
      db.set(`reactionRoles_${message.guild.id}`, filtered);
    }
    else if(args[0] === "list" || args[0] === 'liste') {
      
      var content = "";
      for(let i=0; i<data.length; i++) {
         content += `${data[i].reaction}`+ ` | ${message.guild.roles.get(data[i].role)}\n`
      }
      const reactionRoleList = new RichEmbed()
	  .setTitle('Emoji-Rol Listesi')
	  .setColor(message.guild.me.displayColor)
	  .setThumbnail(message.guild.iconURL)
      .setDescription(content)
      message.channel.send(reactionRoleList);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reaction-role', 'emojilirol', 'emojili-rol', 'emoji-rol', 'emojirol', 'tepkirol', 'tepki-rol', 'tepkilirol', 'tepkili-rol', 'rolereact', 'role-react'],
  permLevel: 0
};

exports.help = {
  name: 'reactionrole',
  description: '',
  usage: 'yardım'
};