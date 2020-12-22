const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
 

  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`para_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 37);

    if (!colour)  return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir renk belirtmelisin! | Red [1.5x] Black [2x] Green [15x]`).setColor(message.guild.me.displayColor));
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Oynamak için bir sayı belirtmelisin! | !rulet <renk> <sayı>`).setColor(message.guild.me.displayColor));

    if (money > moneydb) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Oynayabilmek için cebinde girdiğin miktarda paran olmalı!`).setColor(message.guild.me.displayColor));


    if (colour == "b" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir renk belirtmelisin! | Red [1.5x] Black [2x] Green [15x]`).setColor(message.guild.me.displayColor));


    if (random == 0 && colour == 2) { // Green
      moneyx = parseInt(money * 15)
        db.add(`para_${message.guild.id}_${user.id}`, moneyx)
         message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **KAZANDIN:** ${moneyx} para kazandın!`).setColor(message.guild.me.displayColor));

    } else if (isOdd(random) && colour == 1) { // Red
        moneyx = parseInt(money * 1.5)
        db.add(`para_${message.guild.id}_${user.id}`, moneyx)
         message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **KAZANDIN:** ${moneyx} para kazandın!`).setColor(message.guild.me.displayColor));

    } else if (!isOdd(random) && colour == 0) { // Black
        moneyx = parseInt(money * 2)
        db.add(`para_${message.guild.id}_${user.id}`, moneyx)
         message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.tik)} | **KAZANDIN:** ${moneyx} para kazandın!`).setColor(message.guild.me.displayColor));

    } else { // Wrong
        db.subtract(`para_${message.guild.id}_${user.id}`, money)
        return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **KAYBETTİN:** ${money} para kaybettin!`).setColor(message.guild.me.displayColor));

    }
 } 
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["rulet"],
  permLevel: 0 
};

exports.help = {
  name: 'rulet',
  description: '',
  usage: ''
};