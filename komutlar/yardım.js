"use strict"
const Discord = require("discord.js")
exports.run = async(client, message, args) => {
 const field = `${client.emojis.get(client.emojiler.sagok)} **•** !`
  const anaMenü = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle('TürkKahvesi Bot Yardım Menüsü')
    .setColor(message.guild.me.displayColor)
    .setTimestamp()
    .setFooter('TürkKahvesi')
    .addField(field + 'yardım genel', 'Genel komutları listeler.')
    .addField(field + 'yardım eğlence', 'Eğlence komutlarını listeler.')
    .addField(field + 'yardım ekonomi', 'Ekonomi sistemi komutlarını listeler.')
    .addField(field + 'yardım çekiliş', 'Çekiliş sistemi komutlarını detaylı şekilde listeler.')
    .addField(field + 'yardım mod', 'Sunucu yönetimini kolaylaştırmaya yarayan komutları detaylı şekilde listeler.')
    .addField(field + 'yardım bot', 'Bota özel birkaç komutu listeler.')

  const kategoriler = ["genel", "eğlence", "ekonomi", "çekiliş", "mod", "moderasyon", "bot"];
  if(!args[0]) return   message.channel.send(anaMenü);
  if(!kategoriler.includes(args[0])) return message.reply('bu kategori mevcut değil');
  if(args[0] === 'genel'){
    const genel = new Discord.RichEmbed()
      .setThumbnail(message.guild.iconURL)
      .setTitle('Genel Komutlar')
      .setColor(message.guild.me.displayColor)
      .setTimestamp()
      .setFooter('TürkKahvesi')
      .addField(field + 'afk <sebep>', 'Sizi afk moduna sokar. Eğer etiketleyen olursa afk sebebinizi belirtir.')
      .addField(field + 'avatar / avatar @kullanıcı', 'Sizin veya etiketlediğiniz üyenin avatarını atar.')
      .addField(field + 'banlananlar', 'Sunucuda banlanmış olan üyeleri listeler.')
      .addField(field + 'film-öner', 'Tüm detaylarıyla rastgele film atar.')
      .addField(field + 'hava-durumu <şehir adı>', 'Belirttiğiniz şehrin hava durumu hakkında bilgi verir.')
      .addField(field + 'kitap-ara <kitap adı>', 'Belirttiğiniz kitap hakkında detaylı bilgi verir.')
      .addField(field + 'kullanıcı-bilgi / kullanıcıbilgi @kullanıcı', 'Sizin veya etiketlediğiniz kullanıcı hakkında ddetaylı bilgi verir.')
      .addField(field + 'oylama <mesaj>', 'Belirttiğinz metinle ilgili bir oylama başlatır.')
      .addField(field + 'rastgele-video <şampiyon adı>', 'Belirttiğiniz şampiyonla ilgili Türk Kahvesi youtube kanalından rastgele video atar.')
      .addField(field + 'spotify @müzik_dinleyen_kullanıcı', 'Spotify\'da müzik dinleyen üyenin dinlediği müzik hakkında detaylı bilgi verir.')
      .addField(field + 'sunucu-bilgi', 'Sunucu hakkında bilgi verir.')
      .addField(field + 'yetkilerim / yetkilerim @kullanıcı', 'Sizin veya etiketlediğiniz kullanıcının sunucudaki yetkilerini gösterir.')
      message.channel.send(genel)
  }

  if(args[0] === 'eğlence'){
    const eğlence = new Discord.RichEmbed()
      .setThumbnail(message.guild.iconURL)
      .setTitle('Eğlence Komutları')
      .setTimestamp()
      .setFooter('TürkKahvesi')
      .setColor(message.guild.me.displayColor)
      .addField(field + 'aşk-ölçer @kullanıcı', 'Etiketlediğiniz kullanıcı ile aranızdaki aşk seviyesini ölçer.')
      .addField(field + 'balık-tut', 'Balık tutarsınız.')
      .addField(field + 'cowsay <mesaj>', 'Yazdığınız mesajı ineğe söyletir.')
      .addField(field + 'duello @kullanıcı', 'Etiketlediğiniz kullanıcı ile VS atarsınız.')
      .addField(field + 'espri', 'Buz gibi espri yapar.')
      .addField(field + 'kedi', 'Rastgele kedi fotoğrafı/gifi atar.')
      .addField(field + 'öp @kullanıcı', 'Etiketlediğiniz kullanıcıyı öpersiniz.')
      .addField(field + 'romen <sayı>', 'Yazdığınız sayıyı romen rakamına çevirir.')
      .addField(field + 'tkm taş/kağıt/makas', 'Botla Taş-Kağıt-Makas oynarsınız')
      .addField(field + 'xox / !xox @kullanıcı', 'Botla veya etiketlediğiniz kullanıcı ile XOX oynarsınız.')
      .addField(field + 'yılbaşı', 'Yeni yıla kalan süreyi gösterir.')
      .addField(field + 'yodasay <mesaj>', 'Yazdığınız mesajı Yoda\'ya söyletir.')
    message.channel.send(eğlence);
  }

  if(args[0] === 'ekonomi'){
    const ekonomi = new Discord.RichEmbed()
      .setThumbnail(message.guild.iconURL)
      .setTitle('Ekonomi Komutları')
      .setTimestamp()
      .setFooter('TürkKahvesi')
      .setColor(message.guild.me.displayColor)
      .addField(field + 'çalış', 'Rastgele bir işte çalışırsınız ve rastgele para kazanırsınız.')
      .addField(field + 'para-çek', 'Bankadaki paranızı çekersiniz.')
      .addField(field + 'para-yükle', 'Bankaya para yüklersiniz')
      .addField(field + 'günlük', 'Günlük para ödülünüzü alırsınız. (200 para)')
      .addField(field + 'market', 'Paranızla alabileceğiniz eşyaları listeler.')
      .addField(field + 'para-gönder @kullanıcı <para miktarı>', 'etiketlediğiniz kullanıcıya paranızdan belirttiğiniz miktarı gönderirsiniz.')
      .addField(field + 'bakiye / bakiye @kullanıcı', 'Sizin veya etiketlediğiniz kullanıcının para miktarını gösterir.')
      .addField(field + 'profil / profil @kullanıcı', 'Sizin veya etiketlediğiniz kullanıcının ekonomi profilini gösterir.')
      .addField(field + 'rulet <renk> <sayı>', 'Rulet oynarsınız.')
      .addField(field + 'satın-al <eşya>', 'Marketten eşya alırsınız.')
      .addField(field + 'soy @kullanıcı', 'Belirttiğiniz kullanıcıdan rastgele para çalarsınız.')
    message.channel.send(ekonomi)
  }
if(args[0] === 'çekiliş') {
  const çekiliş = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle('Çekiliş Sistemi Komutları')
    .setTimestamp()
    .setFooter('TürkKahvesi')
    .setColor(message.guild.me.displayColor)
    .addField(field + 'çekiliş-başlat #kanal <çekiliş süresi> <kullanıcı sayısı> <ödül>', 'Çekilişi başlatırsınız.')
    .addField(field + 'çekiliş-yeniden <çekilişin mesaj ID\'si', 'Biten çekiliş için yeni kazanan seçersiniz')
    .addField(field + 'çekiliş-limit <limit sayısı>', 'Devam eden çekiliş için maksimum katılımcı limiti belirlersiniz.')
    .addField(field + 'çekiliş-düzenle <çekiliş mesaj ID\'si> <yeni kazanan sayısı> <yeni ödül>', 'Devam eden çekilişin kazanan sayısını ve ödülünü belirlersiniz.')
    .addField(field + 'çekiliş-sil <çekilişin mesaj ID\'si>', 'Devam eden çekilişi siler.')
  message.channel.send(çekiliş)

}

if(args[0] === 'mod' || args[0] === 'moderasyon'){
  const mod = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle('Çekiliş Sistemi Komutları')
    .setTimestamp()
    .setFooter('TürkKahvesi')
    .setColor(message.guild.me.displayColor)
    .addField(field + 'duyuru <mesaj>', 'Embedli duyuru mesajı atmanızı sağlar.')
    .addField(field + 'modlog #kanal/ !modlog sıfırla', 'Bir mod-log kanalı oluşturur veya sıfırlarsınız.')
    .addField(field + 'emoji-rol ekle #kanal <mesaj id> @rol <emoji>', 'Belirlediğiniz mesajda emojiye tıklayınca bir rol vermesini ayarlarsınız')
    .addField(field + 'emoji-rol sil <mesaj ID> @rol <emoji>', 'Emoji-rol ayarını belirttiğiniz emoji için silersiniz.')
    .addField(field + 'emoji-rol liste', 'Ayarlanan emojileri ve verdiği rolleri listeler.')
    .addField(field + 'uyar @kullanıcı <sebep>', 'Etiketlediğiniz kullanıcıyı belirttiğiniz sebeple uyarır ve bir uyarı rolü verir veya uyarı rolünü yükseltir.')
    .addField(field + 'uyarı-liste @kullanıcı', 'Etiketlediğiniz kullanıcının uyarılarını detaylı olarak listeler.')
    .addField(field + 'uyarı-kaldır @kullanıcı', 'Kullanıcının sadece uyarı rolünü düşürür uyarı listesi temizlenmez.')
  message.channel.send(mod)
}

if(args[0] === 'bot') {
  const bot = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle('Çekiliş Sistemi Komutları')
    .setTimestamp()
    .setFooter('TürkKahvesi')
    .setColor(message.guild.me.displayColor)
    .addField(field + 'istatistik', 'Botun anlık istatistiklerini gösterir.')
    .addField(field + 'oynuyor-değiştir <playing/watching/listening> <oynuyor metni>', 'Botun oynuyor mesajını ve durumunu değiştirir.')
message.channel.send(bot)
}

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};