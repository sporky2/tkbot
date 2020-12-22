const Discord = require('discord.js');
const db = require('quick.db');





exports.run = async (client, message, args) => {
  
if (!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** Bir şampiyon adı belirtmelisin!`).setColor(message.guild.me.displayColor));
  
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //aatrox
if(args[0] ==="aatrox") {
    const aatroxVideo = [
   "https://youtu.be/CcESeOGFbI8",
   "https://youtu.be/rnz3tJ4hN2o",
   "https://youtu.be/GgAabbE-jiU",
   "https://youtu.be/QpdA_4_cM7I",
   "https://youtu.be/RN8TebEXkbA",
               ];
  
  message.channel.send('Videolar Yükleniyor...').then(message => {

var aatrox = aatroxVideo[Math.floor(Math.random() * aatroxVideo.length)];
            setTimeout(()=>
                       message.edit(`${aatrox}`), 3000);
    
  });
    
    
    }
//aatrox Son
 ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //ahri
if(args[0] ==="ahri") {
    const ahriVideo = [
   "Kanalda henüz ahri videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var ahri = ahriVideo[Math.floor(Math.random() * ahriVideo.length)];
          setTimeout(() =>
                     message.edit(`${ahri}`), 3000);
    
  });
    
    
    }
//ahri Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //akali
if(args[0] ==="akali") {
    const akaliVideo = [
   "Kanalda henüz akali videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var akali = akaliVideo[Math.floor(Math.random() * akaliVideo.length)];
          setTimeout(() =>
                     message.edit(`${akali}`), 3000);
    
  });
    
    
    }
//akali Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //alistar
if(args[0] ==="alistar") {
    const alistarVideo = [
   "Kanalda henüz alistar videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var alistar = alistarVideo[Math.floor(Math.random() * alistarVideo.length)];
       setTimeout(() =>
            message.edit(`${alistar}`), 3000);
    
  });
    
    
    }
//alistar Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //amumu
if(args[0] ==="amumu") {
    const amumuVideo = [
   "https://youtu.be/EsRBaaDOkYE",
   "https://youtu.be/mdWMU3VGGOQ",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var amumu = amumuVideo[Math.floor(Math.random() * amumuVideo.length)];
           setTimeout(() =>
                      message.edit(`${amumu}`), 3000);
    
  });
    
    
    }
//akali Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //anivia
if(args[0] ==="anivia") {
    const aniviaVideo = [
   "Kanalda henüz anivia videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var anivia = aniviaVideo[Math.floor(Math.random() * aniviaVideo.length)];
           setTimeout(() =>
                      message.edit(`${anivia}`),3000);
    
  });
    
    
    }
//anivia Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //annie
if(args[0] ==="annie") {
    const annieVideo = [
   "Kanalda henüz annie videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var annie = annieVideo[Math.floor(Math.random() * annieVideo.length)];
            setTimeout(() =>
                       message.edit(`${annie}`), 3000);
    
  });
    
    
    }
//annie Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //aphelios
if(args[0] ==="aphelios") {
    const apheliosVideo = [
   "Kanalda henüz aphelios videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var aphelios = apheliosVideo[Math.floor(Math.random() * apheliosVideo.length)];
            setTimeout(() =>
                       message.edit(`${aphelios}`), 3000);
    
  });
    
    
    }
//aphelios Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //ashe
if(args[0] ==="ashe") {
    const asheVideo = [
   "Kanalda henüz ashe videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var ashe = asheVideo[Math.floor(Math.random() * asheVideo.length)];
            setTimeout(() =>
                       message.edit(`${ashe}`), 3000);
    
  });
    
    
    }
//ashe Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //aurelion sol
if(args[0] ==="aurelionsol" || args[0] === 'aurelion' || args[0] === 'asol') {
    const asolVideo = [
   "Kanalda henüz aurelion sol videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var asol = asolVideo[Math.floor(Math.random() * asolVideo.length)];
            setTimeout(() =>
                       message.edit(`${asol}`), 3000);
    
  });
    
    
    }
//aurelion sol Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //azir
if(args[0] ==="azir") {
    const azirVideo = [
   "Kanalda henüz azir videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var azir = azirVideo[Math.floor(Math.random() * azirVideo.length)];
           setTimeout(() =>
                      message.edit(`${azir}`), 3000);
    
  });
    
    
    }
//azir Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //bard
if(args[0] ==="bard") {
    const bardVideo = [
   "https://youtu.be/QVLSLC3AVmI",
   "https://youtu.be/cBFb8IUyyiE",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var bard = bardVideo[Math.floor(Math.random() * bardVideo.length)];
            setTimeout(() =>
                       message.edit(`${bard}`), 3000);
    
  });
    
    
    }
//bard Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //blitzcrank
if(args[0] ==="blitzcrank" || args[0] === 'bc' || args[0] === 'blitz') {
    const bcVideo = [
   "https://youtu.be/T3JRmw5rM20",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var bc = bcVideo[Math.floor(Math.random() * bcVideo.length)];
            setTimeout(() =>
                       message.edit(`${bc}`), 3000);
    
  });
    
    
    }
//blitzcrank Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //brand
if(args[0] ==="brand") {
    const brandVideo = [
   "https://youtu.be/_AVlQL9HXig",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var brand = brandVideo[Math.floor(Math.random() * brandVideo.length)];
            setTimeout(() =>
                       message.edit(`${brand}`), 3000);
    
  });
    
    
    }
//brand Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //braum
if(args[0] ==="braum") {
    const braumVideo = [
   "Kanalda henüz braum videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var braum = braumVideo[Math.floor(Math.random() * braumVideo.length)];
            setTimeout(() =>
                       message.edit(`${braum}`), 3000);
    
  });
    
    
    }
//braum Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //caitlyn
if(args[0] ==="caitlyn" || args[0] === 'cait') {
    const caitVideo = [
   "Kanalda henüz caitlyn videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var cait = caitVideo[Math.floor(Math.random() * caitVideo.length)];
            setTimeout(() =>
                        message.edit(`${cait}`), 3000);
    
  });
    
    
    }
//caitlyn Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //camille
if(args[0] ==="camille") {
    const camilleVideo = [
   "https://youtu.be/orMzHMeucPA",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var camille = camilleVideo[Math.floor(Math.random() * camilleVideo.length)];
            setTimeout(() =>
                       message.edit(`${camille}`), 3000);
    
  });
    
    
    }
//camille Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //cassiopeia
if(args[0] ==="cassiopeia" || args[0] === 'cassi') {
    const cassiVideo = [
   "Kanalda henüz cassiopeia videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var cassi = cassiVideo[Math.floor(Math.random() * cassiVideo.length)];
            setTimeout(() =>
                       message.edit(`${cassi}`), 3000);
    
  });
    
    
    }
//cassiopeia Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //cho'gath
if(args[0] ==="cho'gath" || args[0] === 'chogath' || args[0] === 'cho') {
    const choVideo = [
   "https://youtu.be/uR7s-ZHehVk",
   "https://youtu.be/obJyd6QCrys",
   "https://youtu.be/bjDcTfnU9Ek",
   "https://youtu.be/_ty1eB4swv4",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var cho = choVideo[Math.floor(Math.random() * choVideo.length)];
            setTimeout(() =>
                       message.edit(`${cho}`), 3000);
    
  });
    
    
    }
//cho'gath Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //corki
if(args[0] ==="corki") {
    const corkiVideo = [
   "https://youtu.be/OcFYUdV9QRI",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var corki = corkiVideo[Math.floor(Math.random() * corkiVideo.length)];
            setTimeout(() =>
                       message.edit(`${corki}`), 3000);
    
  });
    
    
    }
//corki Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //darius
if(args[0] ==="darius" || args[0] === 'dari') {
    const akaliVideo = [
   "Kanalda henüz darius videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var akali = akaliVideo[Math.floor(Math.random() * akaliVideo.length)];
            setTimeout(() =>
                       message.edit(`${akali}`), 3000);
    
  });
    
    
    }
//darius Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //diana
if(args[0] ==="diana") {
    const dianaVideo = [
   "https://youtu.be/g0rfCXKc47Q",
   "https://youtu.be/_Oc3zXPwn8M",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var diana = dianaVideo[Math.floor(Math.random() * dianaVideo.length)];
            setTimeout(() =>
                       message.edit(`${diana}`), 3000);
    
  });
    
    
    }
//diana Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //Dr. Mundo
if(args[0] ==="drmundo" || args[0] === 'dr.mundo' || args[0] === 'mundo') {
    const mundoVideo = [
   "https://youtu.be/8XoY5QpgKO8",
   "https://youtu.be/SaRDiNzoEes",
   "https://youtu.be/bnIT5zroJOU",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var mundo = mundoVideo[Math.floor(Math.random() * mundoVideo.length)];
            setTimeout(() =>
                       message.edit(`${mundo}`), 3000);
    
  });
    
    
    }
//Dr. Mundo Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //draven
if(args[0] ==="draven") {
    const dravenVideo = [
   "Kanalda henüz draven videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var draven = dravenVideo[Math.floor(Math.random() * dravenVideo.length)];
            setTimeout(() =>
                       message.edit(`${draven}`), 3000);
    
  });
    
    
    }
//draven Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
  //Ekko
if(args[0] ==="ekko") {
    const ekkoVideo = [
   "https://youtu.be/qUtVEGX-WDU",
   "https://youtu.be/ZFRtNIlNmak",
   "https://youtu.be/dPq2j1lK9Fs",
   "https://youtu.be/-g994XnjZWg",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var ekko = ekkoVideo[Math.floor(Math.random() * ekkoVideo.length)];
            setTimeout(() =>
                       message.edit(`${ekko}`), 3000);
    
  });
    
    
    }
//Ekko Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  

  
    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  //elise
if(args[0] ==="elise") {
    const eliseVideo = [
   "https://youtu.be/L2cC1GiW9IU",
   "https://youtu.be/UrJzg0gCgx8",
   "https://youtu.be/4Sg1FEukNjk",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var elise = eliseVideo[Math.floor(Math.random() * eliseVideo.length)];
            setTimeout(() =>
                       message.edit(`${elise}`), 3000);
    
  });
    
    
    }
//elise Son
  
  
  
  
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //evelynn
if(args[0] ==="evelynn" || args[0] === "eve") {
    const eveVideo = [
   "https://youtu.be/ulABOtYMqfM",
   "https://youtu.be/Y9T1viS7Yu0",
   "https://youtu.be/z3Hiy17V4Xw",
   "https://youtu.be/a3s6Ejkq35Y",
   "https://youtu.be/oXRQttyE7t0",
   "https://youtu.be/-KjZMN1eXUY",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var eve = eveVideo[Math.floor(Math.random() * eveVideo.length)];
            setTimeout(() =>
                       message.edit(`${eve}`), 3000);
    
  });
    
    
    }
//evelynn Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //ezreal
if(args[0] ==="ezreal" || args[0] === "ez") {
    const ezVideo = [
   "https://youtu.be/mhPYBh0rsAY",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var ez = ezVideo[Math.floor(Math.random() * ezVideo.length)];
            setTimeout(() =>
                       message.edit(`${ez}`), 3000);
    
  });
    
    
    }
//ezreal Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //fiddlesticks
if(args[0] ==="fiddlesticks" || args[0] === "fiddle") {
    const fidleVideo = [
   "https://youtu.be/aKR2txQKZgI",
   "https://youtu.be/cRzK3jwNsG8",
   "https://youtu.be/IOfdxbzeVDI",
   "https://youtu.be/OkjjmIHR5vs",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var fidle = fidleVideo[Math.floor(Math.random() * fidleVideo.length)];
            setTimeout(() =>
                       message.edit(`${fidle}`), 3000);
    
  });
    
    
    }
//fiddlesticks Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  


////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //fiora
if(args[0] ==="fiora") {
    const fioraVideo = [
   "Kanalda henüz fiora videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var fiora = fioraVideo[Math.floor(Math.random() * fioraVideo.length)];
            setTimeout(() =>
                       message.edit(`${fiora}`), 3000);
    
  });
    
    
    }
//fiora Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  


////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //fizz
if(args[0] ==="fizz") {
    const fizzVideo = [
   "https://youtu.be/9KtPPUYpsaE",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var fizz = fizzVideo[Math.floor(Math.random() * fizzVideo.length)];
            setTimeout(() =>
                       message.edit(`${fizz}`), 3000);
    
  });
    
    
    }
//fizz Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  


////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //galio
if(args[0] ==="galio") {
    const galioVideo = [
   "Kanalda henüz galio videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var galio = galioVideo[Math.floor(Math.random() * galioVideo.length)];
            setTimeout(() =>
                       message.edit(`${galio}`), 3000);
    
  });
    
    
    }
//galio Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  


  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //gangplank
if(args[0] ==="gangplank" || args[0] === "gp") {
    const gpVideo = [
   "Kanalda henüz gangplank videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var gp = gpVideo[Math.floor(Math.random() * gpVideo.length)];
            setTimeout(() =>
                       message.edit(`${gp}`), 3000);
    
  });
    
    
    }
//Gangplank Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //garen
if(args[0] ==="garen") {
    const garenVideo = [
   "https://youtu.be/I1pscnlL9nI",
   "https://youtu.be/kQ9mJ0NM5xc",
   "https://youtu.be/DwQsPwFLbWA",
   "https://youtu.be/gf9DEAIW5vM",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var garen = garenVideo[Math.floor(Math.random() * garenVideo.length)];
            setTimeout(() =>
                       message.edit(`${garen}`), 3000);
    
  });
    
    
    }
//garen Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //gnar
if(args[0] ==="gnar") {
    const gnarVideo = [
   "Kanalda henüz gnar videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var gnar = gnarVideo[Math.floor(Math.random() * gnarVideo.length)];
            setTimeout(() =>
                       message.edit(`${gnar}`), 3000);
    
  });
    
    
    }
//gnar Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //gragas
if(args[0] ==="gragas") {
    const gragasVideo = [
   "https://youtu.be/vnpP6JxukbU",
   "https://youtu.be/rYFw6Hi8wxw",
   "https://youtu.be/GAWcUtA3PFI",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var gragas = gragasVideo[Math.floor(Math.random() * gragasVideo.length)];
            setTimeout(() =>
                       message.edit(`${gragas}`), 3000);
    
  });
    
    
    }
//gragas Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //graves
if(args[0] ==="graves") {
    const gravesVideo = [
   "https://youtu.be/D3KXHTZ1C8U",
   "https://youtu.be/cPAB1_tjgLw",
   "https://youtu.be/M5FzOdgP864",
   "https://youtu.be/LxEDzzbLt4I",
   "https://youtu.be/uMAANlWO0xc",
   "https://youtu.be/vc5rstoFWdM",
   "https://youtu.be/Jq_XoPrflxc",
   "https://youtu.be/0rwT-s1tSMM",
   "https://youtu.be/H_guSMgnpZ4",
   "https://youtu.be/_2iq2qepWAs",
   "https://youtu.be/JqKl8dgkLRM",
   "https://youtu.be/feuM8kHduqs",
   "https://youtu.be/VQPxysjmH2s",
   "https://youtu.be/l5Snd4JYP7Y",
   "https://youtu.be/FYDh4PcWSu0",
   "https://youtu.be/REvxUZjvOOQ",
   "https://youtu.be/MU60LqTtpXg",
   "https://youtu.be/10VHSFWZRx4",
   "https://youtu.be/iqUrUm61xbE",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var graves = gravesVideo[Math.floor(Math.random() * gravesVideo.length)];
            setTimeout(() =>
                       message.edit(`${graves}`), 3000);
    
  });
    
    
    }
//graves Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //hecarim
if(args[0] ==="hecarim" || args[0] === "heca") {
    const hecarimVideo = [
   "https://youtu.be/kGx8yKUT17U",
   "https://youtu.be/fRLHXVkWaiw",
   "https://youtu.be/gB4iBm1q44c",
   "https://youtu.be/Wyc0cN-Qo6g",
   "https://youtu.be/S4LfGlutqws",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var hecarim = hecarimVideo[Math.floor(Math.random() * hecarimVideo.length)];
            setTimeout(() =>
                       message.edit(`${hecarim}`), 3000);
    
  });
    
    
    }
//hecarim Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //heimerdinger
if(args[0] ==="heim" || args[0] === "heimer" || args[0] === "heimerdinger") {
    const heimVideo = [
   "Kanalda henüz heimerdinger videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var heim = heimVideo[Math.floor(Math.random() * heimVideo.length)];
            setTimeout(() =>
                       message.edit(`${heim}`), 3000);
    
  });
    
    
    }
//heimerdinger Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //illaoi
if(args[0] ==="illaoi") {
    const illaoiVideo = [
   "https://youtu.be/T24dL5mefZQ",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var illaoi = illaoiVideo[Math.floor(Math.random() * illaoiVideo.length)];
            setTimeout(() =>
                       message.edit(`${illaoi}`), 3000);
    
  });
    
    
    }
//illaoi Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //irelia
if(args[0] ==="irelia") {
    const ireliaVideo = [
   "https://youtu.be/6E3wL7npbwo",
   "https://youtu.be/kkBljnbXggo",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var irelia = ireliaVideo[Math.floor(Math.random() * ireliaVideo.length)];
            setTimeout(() =>
                       message.edit(`${irelia}`), 3000);
    
  });
    
    
    }
//irelia Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //ivern
if(args[0] ==="ivern") {
    const ivernVideo = [
   "https://youtu.be/ePeEURr_MII",
   "https://youtu.be/T6nIvRWooFg",
   "https://youtu.be/_-YS1XXDACU",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var ivern = ivernVideo[Math.floor(Math.random() * ivernVideo.length)];
            setTimeout(() =>
                       message.edit(`${ivern}`), 3000);
    
  });
    
    
    }
//ivern Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //janna
if(args[0] ==="janna") {
    const jannaVideo = [
   "Kanalda henüz janna videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var janna = jannaVideo[Math.floor(Math.random() * jannaVideo.length)];
            setTimeout(() =>
                       message.edit(`${janna}`), 3000);
    
  });
    
    
    }
//janna Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  


////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
//jarvan
  
  

if(args[0] ==="jarvan"||args[0] ==="j4" ||args[0] === "jarvan4" ||args[0] === 'jarvaniv') {
    const jarvanVideo = [
   "https://youtu.be/egI0ZUwMcaQ",
   "https://youtu.be/ZwChPqiDqZM",
   "https://youtu.be/aU_Ojy3MiLo",
   "https://youtu.be/xjliYZRZ3uY",
   "https://youtu.be/OJNqu2li434",
   "https://youtu.be/SwzOLoB9uYc",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var j4 = jarvanVideo[Math.floor(Math.random() * jarvanVideo.length)];
            setTimeout(() =>
                       message.edit(`${j4}`), 3000);
    
  });
    
    
    }
  
//JARVAN son
////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////


  
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //jax
if(args[0] ==="jax") {
    const jaxVideo = [
   "https://youtu.be/oyjJ0XMvkSg",
   "https://youtu.be/LxLQTT4O1I0",
   "https://youtu.be/GITmkkyK-kw",
   "https://youtu.be/zFccrvGfkJA",
   "https://youtu.be/6A4WYlEbmWg",
   "https://youtu.be/FQCV4t8lJyo",
   "https://youtu.be/PE5d2M2eEnc",
  ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var jax = jaxVideo[Math.floor(Math.random() * jaxVideo.length)];
            setTimeout(() =>
                       message.edit(`${jax}`), 3000);
    
  });
    
    
    }
//jax Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //jayce
if(args[0] ==="jayce") {
    const jayceVideo = [
   "https://youtu.be/9_5CqaslyjQ",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var jayce = jayceVideo[Math.floor(Math.random() * jayceVideo.length)];
            setTimeout(() =>
                       message.edit(`${jayce}`), 3000);
    
  });
    
    
    }
//jayce Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //jhin
if(args[0] ==="jhin") {
    const jhinVideo = [
   "https://youtu.be/W6krfI3diZo",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var jhin = jhinVideo[Math.floor(Math.random() * jhinVideo.length)];
            setTimeout(() =>
                       message.edit(`${jhin}`), 3000);
    
  });
    
    
    }
//jhin Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //jinx
if(args[0] ==="jinx") {
    const jinxVideo = [
   "Kanalda henüz jinx videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var jinx = jinxVideo[Math.floor(Math.random() * jinxVideo.length)];
            setTimeout(() =>
                       message.edit(`${jinx}`), 3000);
    
  });
    
    
    }
//jinx Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kai'sa
if(args[0] ==="kai'sa" || args[0] === "kaisa") {
    const kaisaVideo = [
   "https://youtu.be/HRw-LmJRCqw",
   "https://youtu.be/AM-K3ewgXt8",
   "https://youtu.be/ZSjOAw7p6m4",
   "https://youtu.be/o8TAy-u3y88",
   "https://youtu.be/NrpKGa1jkBU",
   "https://youtu.be/PyW7fEgoK_s",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kaisa = kaisaVideo[Math.floor(Math.random() * kaisaVideo.length)];
            setTimeout(() =>
                       message.edit(`${kaisa}`), 3000);
    
  });
    
    
    }
//kaisa Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kalista
if(args[0] ==="kalista") {
    const kalistaVideo = [
   "Kanalda henüz kalista videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kalista = kalistaVideo[Math.floor(Math.random() * kalistaVideo.length)];
            setTimeout(() =>
                       message.edit(`${kalista}`), 3000);
    
  });
    
    
    }
//kalista Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //karma
if(args[0] ==="karma") {
    const karmaVideo = [
   "Kanalda henüz karma videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var karma = karmaVideo[Math.floor(Math.random() * karmaVideo.length)];
            setTimeout(() =>
                       message.edit(`${karma}`), 3000);
    
  });
    
    
    }
//karma Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //karthus
if(args[0] ==="karthus") {
    const karthusVideo = [
   "https://youtu.be/l0vf5V1515o",
   "https://youtu.be/BV-YB_YiGdI",
   "https://youtu.be/LpbTyVBe0oo",
   "https://youtu.be/OrpMRk61r9I",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var karthus = karthusVideo[Math.floor(Math.random() * karthusVideo.length)];
            setTimeout(() =>
                       message.edit(`${karthus}`), 3000);
    
  });
    
    
    }
//kathus Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kassadin
if(args[0] ==="kassadin") {
    const kassadinVideo = [
   "https://youtu.be/1dAJ-quW13M",
   "https://youtu.be/6k1DxGQAIzA",
   "https://youtu.be/pnZ-1OPDIwo",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kassadin = kassadinVideo[Math.floor(Math.random() * kassadinVideo.length)];
            setTimeout(() =>
                       message.edit(`${kassadin}`), 3000);
    
  });
    
    
    }
//kassadin Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //katarina
if(args[0] ==="katarina" || args[0] === "kata") {
    const kataVideo = [
   "Kanalda henüz katarina videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kata = kataVideo[Math.floor(Math.random() * kataVideo.length)];
            setTimeout(() =>
                       message.edit(`${kata}`), 3000);
    
  });
    
    
    }
//katarina Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kayle
if(args[0] ==="kayle") {
    const kayleVideo = [
   "Kanalda henüz kayle videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kayle = kayleVideo[Math.floor(Math.random() * kayleVideo.length)];
            setTimeout(() =>
                       message.edit(`${kayle}`), 3000);
    
  });
    
    
    }
//kayle Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kayn
if(args[0] ==="kayn") {
    const kaynVideo = [
   "https://youtu.be/xd5qpNsz3z4",
   "https://youtu.be/VnjVGsjIr6M",
   "https://youtu.be/1-igV253SlE",
   "https://youtu.be/Valf8kE0DvE",
   "https://youtu.be/fowDzJ-eIjM",
   "https://youtu.be/t9vnNfoxh20",
   "https://youtu.be/-D69nPYpujo",
   "https://youtu.be/jrvSZaUvaDY",
   "https://youtu.be/uP2mivbeQCo",
   "https://youtu.be/o8npi_SeggM",
   "https://youtu.be/YmYpmUs-LE4",
   "https://youtu.be/l0E8v_eoS3A",
   "https://youtu.be/HibkDDkHHU4",
   "https://youtu.be/mpzxIdCGiY4",
   "https://youtu.be/578IG_uhusQ",
   "https://youtu.be/0imN_7HWtes",
   "https://youtu.be/fBo-pF_jKE8",
   "https://youtu.be/c9L3vFiycoU",
   "https://youtu.be/ibrd0Uerz0M",
   "https://youtu.be/2cgcy6unIE4",
   "https://youtu.be/_AxPwQXdA9o",
   "https://youtu.be/HEAXIR8hWsg",
   "https://youtu.be/h_aq_e_mJCI",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kayn = kaynVideo[Math.floor(Math.random() * kaynVideo.length)];
            setTimeout(() =>
                       message.edit(`${kayn}`), 3000);
    
  });
    
    
    }
//kayn Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kennen
if(args[0] ==="kennen") {
    const kennenVideo = [
   "Kanalda henüz kennen videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kennen = kennenVideo[Math.floor(Math.random() * kennenVideo.length)];
            setTimeout(() =>
                       message.edit(`${kennen}`), 3000);
    
  });
    
    
    }
//kennen Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kha'zix
if(args[0] ==="khazix" || args[0] === "kha'zix" || args[0]=== "kha") {
    const khaVideo = [
   "https://youtu.be/PSkndrUgNFw",
   "https://youtu.be/RPugcmB5-sM",
   "https://youtu.be/ke8IYJVJIT8",
   "https://youtu.be/QDRtIoE1aDY",
   "https://youtu.be/_u_4TN1Ttfo",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kha = khaVideo[Math.floor(Math.random() * khaVideo.length)];
            setTimeout(() =>
                       message.edit(`${kha}`), 3000);
    
  });
    
    
    }
//kha'zix Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kindred
if(args[0] ==="kindred") {
    const kindredVideo = [
   "https://youtu.be/EcNIjMHQDLE",
   "https://youtu.be/PpgNhlUOeQI",
   "https://youtu.be/fL-GOjLedYw",
   "https://youtu.be/bpFRfm8tNZc",
   "https://youtu.be/mcQ0Cq8e1AI",
   "https://youtu.be/tLXViCTZgxA",
   "https://youtu.be/1USNwPK_ieE",
   "https://youtu.be/EYfGi23KWKs",
   "https://youtu.be/Z4pGID78fDA",
   "https://youtu.be/FHGEarJbYVs",
   "https://youtu.be/d7tf_EvH-RE",
   "https://youtu.be/tm-r5vDvNY4",
   "https://youtu.be/zurb_7Weigo",
   "https://youtu.be/8fKFhoHwhik",
   "https://youtu.be/aFZyi3G829w",
   "https://youtu.be/e1Cl-bJu5FM",
   "https://youtu.be/30yHBG7rYiU",
   "https://youtu.be/DGazvr0jaeM",
   "https://youtu.be/w2bjMeRqrAc",
   "https://youtu.be/EXnws8NvdAs",
   "https://youtu.be/ewSJRn6Txrk",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kindred = kindredVideo[Math.floor(Math.random() * kindredVideo.length)];
            setTimeout(() =>
                       message.edit(`${kindred}`), 3000);
    
  });
    
    
    }
//kindred Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kled
if(args[0] ==="kled") {
    const kledVideo = [
   "Kanalda henüz kled videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kled = kledVideo[Math.floor(Math.random() * kledVideo.length)];
            setTimeout(() =>
                       message.edit(`${kled}`), 3000);
    
  });
    
    
    }
//kled Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //kog'maw
if(args[0] ==="kogmaw" || args[0] === "kog'maw") {
    const kogmawVideo = [
   "Kanalda henüz kog'maw videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var kogmaw = kogmawVideo[Math.floor(Math.random() * kogmawVideo.length)];
            setTimeout(() =>
                       message.edit(`${kogmaw}`), 3000);
    
  });
    
    
    }
//kog'maw Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //leBlanc
if(args[0] ==="leblanc" || args[0] === "lb") {
    const lbVideo = [
   "Kanalda henüz leblanc videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var lb = lbVideo[Math.floor(Math.random() * lbVideo.length)];
            setTimeout(() =>
                       message.edit(`${lb}`), 3000);
    
  });
    
    
    }
//leBlanc Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //lee sin
if(args[0] ==="leesin" || args[0] === "lee") {
    const leeVideo = [
   "https://youtu.be/oqAIawWqDjw",
   "https://youtu.be/-O1cH724s1Y",
   "https://youtu.be/yjhkk1TBxIw",
   "https://youtu.be/iQOkcjJgLwA",
   "https://youtu.be/erz-12_NfAg",
   "https://youtu.be/1C2I-Akqp28",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var lee = leeVideo[Math.floor(Math.random() * leeVideo.length)];
            setTimeout(() =>
                       message.edit(`${lee}`), 3000);
    
  });
    
    
    }
//lee sin Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //leona
if(args[0] ==="leona") {
    const leonaVideo = [
   "Kanalda henüz leona videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var leona = leonaVideo[Math.floor(Math.random() * leonaVideo.length)];
            setTimeout(() =>
                       message.edit(`${leona}`), 3000);
    
  });
    
    
    }
//leona Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////





    ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //lillia
if(args[0] ==="lillia") {
  const lilliaVideo = [
 "https://youtu.be/BUPNNIgWowc",
 "https://youtu.be/_FwYPa3va7w",
 "https://youtu.be/3hBaQRX_xrI",
 "https://youtu.be/LJOY1cohKQ8",
 "https://youtu.be/tX_Z89IyGZ4",
 "https://youtu.be/WfPyospikxY",
 "https://youtu.be/jhzE3QbA0hE",
             ];

message.channel.send('Videolar Yükleniyor..').then(message => {

var lillia = lilliaVideo[Math.floor(Math.random() * lilliaVideo.length)];
          setTimeout(() =>
                     message.edit(`${lillia}`), 3000);
  
});
  
  
  }
//lillia Son
////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //lissandra
if(args[0] ==="lissandra" || args[0] === "liss") {
    const lissVideo = [
   "Kanalda henüz lissandra videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var liss = lissVideo[Math.floor(Math.random() * lissVideo.length)];
            setTimeout(() =>
                       message.edit(`${liss}`), 3000);
    
  });
    
    
    }
//lissandra Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //lucian
if(args[0] ==="lucian" || args[0] === "luci") {
    const luciVideo = [
   "https://youtu.be/4VoRODEZjjk",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var luci = luciVideo[Math.floor(Math.random() * luciVideo.length)];
            setTimeout(() =>
                       message.edit(`${luci}`), 3000);
    
  });
    
    
    }
//luci Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //lulu
if(args[0] ==="lulu") {
    const luluVideo = [
   "Kanalda henüz lulu videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var lulu = luluVideo[Math.floor(Math.random() * luluVideo.length)];
            setTimeout(() =>
                       message.edit(`${lulu}`), 3000);
    
  });
    
    
    }
//lulu Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////

  
  

  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
    //lux
if(args[0] ==="lux") {
    const luxVideo = [
   "Kanalda henüz lux videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var lux = luxVideo[Math.floor(Math.random() * luxVideo.length)];
            setTimeout(() =>
                       message.edit(`${lux}`), 3000);
    
  });
    
    
    }
//lux Son
  ////////////////////-----------------||||||||||||||||||||||---------------------------//////////////////////////
  
  

  
//malphite
if(args[0] ==="malphite" || args[0] === 'malp' ){
    const malpVideo = [
   "https://youtu.be/AHJH_gr8Q9I",
   "https://youtu.be/_7rGx-xsqm4",
   "https://youtu.be/Uy181pklUyw",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var malp = malpVideo[Math.floor(Math.random() * malpVideo.length)];
            setTimeout(() =>
                       message.edit(`${malp}`), 3 * 1000);
    
  });
    
    
    }
//Malphite Son
 
  
  
  
  //malzahar
if(args[0] ==="malzahar") {
    const malzaharVideo = [
   "Kanalda henüz malzahar videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var malzahar = malzaharVideo[Math.floor(Math.random() * malzaharVideo.length)];
            setTimeout(() =>
                       message.edit(`${malzahar}`), 3000);
    
  });
    
    
    }
//malzahar Son
 
  
  
  
  //maokai
if(args[0] === "maokai") {
    const maokaiVideo = [
   "Kanalda henüz maokai videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var maokai = maokaiVideo[Math.floor(Math.random() * maokaiVideo.length)];
            setTimeout(() =>
                       message.edit(`${maokai}`), 3000);
    
  });
    
    
    }
//maokai Son
 
  
  
  //Master yi
if(args[0] ==="master" || args[0] === 'yi' || args[0] === 'masteryi') {
    const masterVideo = [
   "https://youtu.be/VdjBUjndoI8",
   "https://youtu.be/2MlYrVsr-Uc",
   "https://youtu.be/ereZBrrQ_LQ",
   "https://youtu.be/ROS3Zkls2MM",
   "https://youtu.be/MkbhEAYDo-k",
   "https://youtu.be/0XjLDNVMKjM",
   "https://youtu.be/EikR4enNZK8",
   "https://youtu.be/_lDhw7lB8O0",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var master = masterVideo[Math.floor(Math.random() * masterVideo.length)];
            setTimeout(() =>
                       message.edit(`${master}`), 3000);
    
  });
    
    
    }
//Master yi Son
 
  
  
  
  
  //Miss Fortune
if(args[0] ==="missfortune" || args[0] === 'mf') {
    const mfVideo = [
   "Kanalda henüz miss fortune videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var mf = mfVideo[Math.floor(Math.random() * mfVideo.length)];
            setTimeout(() =>
                       message.edit(`${mf}`), 3000);
    
  });
    
    
    }
//Miss Fortune Son
 
  
  
  
  //mordekaiser
if(args[0] ==="mordekaiser" || args[0] === 'morde') {
    const mordeVideo = [
   "https://youtu.be/Z42ZIQdtepw",
   "https://youtu.be/NCS9J_lkQ7Y",
   "https://youtu.be/44IElR7AA2g",
   "https://youtu.be/MU2k8_7Puq8",
   "https://youtu.be/7K8Mpttxd1A",
   "https://youtu.be/GOhNHeGY39Q",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var morde = mordeVideo[Math.floor(Math.random() * mordeVideo.length)];
            setTimeout(() =>
                       message.edit(`${morde}`), 3000);
    
  });
    
    
    }
//Mordekaiser Son
 
  
  
  
  //Morgana
if(args[0] ==="morgana") {
    const morganaVideo = [
   "https://youtu.be/EsRaYrPT2Rw",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var morgana = morganaVideo[Math.floor(Math.random() * morganaVideo.length)];
            setTimeout(() =>
                       message.edit(`${morgana}`), 3000);
    
  });
    
    
    }
//morganaSon
 
  
  
  
  //nami
if(args[0] ==="nami") {
    const namiVideo = [
   "Kanalda henüz nami videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var nami = namiVideo[Math.floor(Math.random() * namiVideo.length)];
            setTimeout(() =>
                       message.edit(`${nami}`), 3000);
    
  });
    
    
    }
//Nami Son
 
  
  
  
  //Nasus
if(args[0] ==="nasus") {
    const nasusVideo = [
   "https://youtu.be/MkF-Rzaki-0",
   "https://youtu.be/dMFtfF1mJZU",
   "https://youtu.be/gmAe3rogarE",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var nasus = nasusVideo[Math.floor(Math.random() * nasusVideo.length)];
            setTimeout(() =>
                       message.edit(`${nasus}`), 3000);
    
  });
    
    
    }
//Nasus Son
 
  
  
  
  //Nautilus
if(args[0] ==="nautilus" || args[0] === 'naut') {
    const nautVideo = [
   "Kanalda henüz nautilus videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var naut = nautVideo[Math.floor(Math.random() * nautVideo.length)];
            setTimeout(() =>
                       message.edit(`${naut}`), 3000);
    
  });
    
    
    }
//Nautilus Son
 
  
  
  
  //Neeko
if(args[0] ==="neeko") {
    const neekoVideo = [
   "https://youtu.be/QRaJ5IZumqc",
   "https://youtu.be/21e0UOTpQ78"
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var neeko = neekoVideo[Math.floor(Math.random() * neekoVideo.length)];
            setTimeout(() =>
                       message.edit(`${neeko}`), 3000);
    
  });
    
    
    }
//Neeko Son
 
  
  
  
  //Nidalee
if(args[0] ==="nidalee") {
    const nidaleeVideo = [
   "Kanalda henüz nidalee videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var nidalee = nidaleeVideo[Math.floor(Math.random() * nidaleeVideo.length)];
            setTimeout(() =>
                       message.edit(`${nidalee}`), 3000);
    
  });
    
    
    }
//nidalee Son
 
  
  
  
  //Nocturne
if(args[0] ==="nocturne") {
    const nocturneVideo = [
   "https://youtu.be/qCPTcCS1vSE",
   "https://youtu.be/D9vfVMzbqyI",
   "https://youtu.be/lwX3IjjvikQ",
   "https://youtu.be/HPhAU937cz4",
   "https://youtu.be/_dldbKEr238",
   "https://youtu.be/94Xf5BJvTFc",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var nocturne = nocturneVideo[Math.floor(Math.random() * nocturneVideo.length)];
            setTimeout(() =>
                       message.edit(`${nocturne}`), 3000);
    
  });
    
    
    }
//Nocturne Son
 
  
  
  
//nunu
if(args[0] ==="nunu") {
    const nunuVideo = [
   "https://youtu.be/oYyFK_RGfcU",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var nunu = nunuVideo[Math.floor(Math.random() * nunuVideo.length)];
            setTimeout(() =>
                       message.edit(`${nunu}`), 3000);
    
  });
    
    
    }
//nunu Son
 
  
  
  
//Olaf
if(args[0] ==="olaf") {
    const olafVideo = [
   "https://youtu.be/f9TbT9sElcM",
   "https://youtu.be/J-Ze5aYImWA",
   "https://youtu.be/Zw7gn7YfUQU",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var olaf = olafVideo[Math.floor(Math.random() * olafVideo.length)];
            setTimeout(()=>
                       message.edit(`${olaf}`), 3000);
    
  });
    
    
    }
//Olaf Son
 
  
  
  
  //Orianna
if(args[0] ==="orianna") {
    const oriannaVideo = [
   "Kanalda henüz orianna videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var orianna = oriannaVideo[Math.floor(Math.random() * orianna.length)];
            setTimeout(() =>
                       message.edit(`${orianna}`), 3000);
    
  });
    
    
    }
//orianna Son
 
  
  
  
  //Ornn
if(args[0] ==="ornn") {
    const ornnVideo = [
   "Kanalda henüz ornn videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var ornn = ornnVideo[Math.floor(Math.random() * ornnVideo.length)];
            setTimeout(() =>
                       message.edit(`${ornn}`), 3000);
    
  });
    
    
    }
//ornn Son
 
  
  
  
  //pantheon
if(args[0] ==="pantheon" || args[0] === 'pant') {
    const pantVideo = [
   "https://youtu.be/6fI_7gFX7Ik",
   "https://youtu.be/iAkTTNaenq8",
   "https://youtu.be/z9q9wIeWA_Q",
   "https://youtu.be/SgKxAcoqmXE",
   "https://youtu.be/yZZyH8JdYUI",
   "https://youtu.be/MWXsbP8hviM",
   "https://youtu.be/xbEX6X6ddQk",
   "https://youtu.be/5UOPfm4tpqA",
   "https://youtu.be/-XozVV9Ksf0",
   "https://youtu.be/8zciAdpSawE",
   "https://youtu.be/d5kprwTdcWs",
   "https://youtu.be/lXWc-xfxRxQ",
   "https://youtu.be/8OmAGRt14uM",
   "https://youtu.be/zmtLALfr6k0",
   "https://youtu.be/k6oHwh6YN50",
   "https://youtu.be/vxTIc28Xlqs",
   "https://youtu.be/La4LaTCK62E",
   "https://youtu.be/JPpioYdxvf8",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var pant = pantVideo[Math.floor(Math.random() * pantVideo.length)];
            setTimeout(() =>
                       message.edit(`${pant}`), 3000);
    
  });
    
    
    }
//pantheon Son
 
  
  
  
  //poppy
if(args[0] ==="poppy") {
    const poppyVideo = [
   "https://youtu.be/lGA-zw7hOuo",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var poppy = poppyVideo[Math.floor(Math.random() * poppyVideo.length)];
            setTimeout(()=>
                       message.edit(`${poppy}`), 3000);
    
  });
    
    
    }
//poppy Son
  
  
  
  
  //pyke
if(args[0] ==="pyke") {
    const pykeVideo = [
   "https://youtu.be/B1WMVuz3-5A",
   "https://youtu.be/UMg9tXlpxLs",
   "https://youtu.be/GdDMTmSbYGw",
   "https://youtu.be/smpVqigRX_Q",
   "https://youtu.be/e12hhnUZv1k",
   "https://youtu.be/13t2PWfEvr0",
   "https://youtu.be/bkyFsR2RFG4",
   "https://youtu.be/UIjz2bFfJK0",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var pyke = pykeVideo[Math.floor(Math.random() * pykeVideo.length)];
            setTimeout(() =>
                       message.edit(`${pyke}`), 3000);
    
  });
    
    
    }
//pyke Son
  
  
  
  //qiyana
if(args[0] ==="qiyana") {
    const qiyanaVideo = [
   "https://youtu.be/40PQTlJQ-2I",
   "https://youtu.be/uZEmnXNv6x8",
   "https://youtu.be/vBIF0w5kOmI",
   "https://youtu.be/5lWwgw6do0Q",
   "https://youtu.be/iJ2ke1dzx3w",
   "https://youtu.be/EpLc4LrL6Ug",
   "https://youtu.be/xbEX6X6ddQk",
   "https://youtu.be/2xUlMUVuet0",
   "https://youtu.be/JAdynxuHYc8",
   "https://youtu.be/jbAkwvqa_gE",
   "https://youtu.be/x-NwRsAMUTw",
   "https://youtu.be/n89nlqLwhW4",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var qiyana = qiyanaVideo[Math.floor(Math.random() * qiyanaVideo.length)];
            setTimeout(() =>
                       message.edit(`${qiyana}`), 3000);
    
  });
    
    
    }
//qiyana Son
  
  
  
  //quinn
if(args[0] ==="quinn") {
    const quinnVideo = [
   "https://youtu.be/qGMoSIuiY6g",
   
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var quinn = quinnVideo[Math.floor(Math.random() * quinnVideo.length)];
            setTimeout(() =>
                       message.edit(`${quinn}`), 3000);
    
  });
    
    
    }
//quinn Son
  
  
  
  //rakan
if(args[0] ==="rakan") {
    const rakanVideo = [
   "https://youtu.be/NFs-sz6h1fw",
   "https://youtu.be/iEi341UBZJg",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var rakan = rakanVideo[Math.floor(Math.random() * rakanVideo.length)];
            setTimeout(() =>
                       message.edit(`${rakan}`), 3000);
    
  });
    
    
    }
//rakan Son
  
  
  
//rammus
if(args[0] ==="rammus") {
    const rammusVideo = [
   "https://youtu.be/WFtfP2z6ldA",
   "https://youtu.be/ysK_C6mXpec",
   "https://youtu.be/Zbkt4RwWJJc",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var rammus = rammusVideo[Math.floor(Math.random() * rammusVideo.length)];
            setTimeout(() =>
                       message.edit(`${rammus}`), 3000);
    
  });
    
    
    }
//rammus Son
  

  
  
  
  //rek'sai
if(args[0] ==="reksai") {
    const reksaiVideo = [
   "https://youtu.be/zRkNd_0KL_w",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var reksai = reksaiVideo[Math.floor(Math.random() * reksaiVideo.length)];
            setTimeout(() =>
                       message.edit(`${reksai}`), 3000);
    
  });
    
    
    }
//rek'sai Son
  
  
  

//renekton
if(args[0] ==="renekton") {
    const renektonVideo = [
   "https://youtu.be/urmpPLzt6kY",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var renekton = renektonVideo[Math.floor(Math.random() * renektonVideo.length)];
            setTimeout(() =>
                       message.edit(`${renekton}`), 3000);
    
  });
    
    
    }
//renekton Son
  
  
  

//rengar
if(args[0] ==="rengar") {
    const rengarVideo = [
   "https://youtu.be/mblsB_wrkrI",
   "https://youtu.be/VnrmO_V-Z9s",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var rengar = rengarVideo[Math.floor(Math.random() * rengarVideo.length)];
            setTimeout(() =>
                       message.edit(`${rengar}`), 3000);
    
  });
    
    
    }
//rengar Son
  
  
  
  
  
//riven
if(args[0] ==="riven") {
    const rivenVideo = [
   "Kanalda henüz riven videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var riven = rivenVideo[Math.floor(Math.random() * rivenVideo.length)];
            setTimeout(() =>
                       message.edit(`${riven}`), 3000);
    
  });
    
    
    }
//riven Son
  
  
  
  
//rumble
if(args[0] ==="rumble") {
    const rumbleVideo = [
   "https://youtu.be/xg2OWzTHaCk",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var rumble = rumbleVideo[Math.floor(Math.random() * rumbleVideo.length)];
            setTimeout(() =>
                       message.edit(`${rumble}`), 3000);
    
  });
    
    
    }
//rumble Son
  
  
  
  
//ryze
if(args[0] ==="ryze") {
    const ryzeVideo = [
   "Kanalda henüz ryze videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var ryze = ryzeVideo[Math.floor(Math.random() * ryzeVideo.length)];
            setTimeout(() =>
                       message.edit(`${ryze}`), 3000);
    
  });
    
    
    }
//ryze Son
  




//samira
if(args[0] ==="samira") {
  const samiraVideo = [
 "https://youtu.be/GH1HUT4xPPM",
             ];

message.channel.send('Videolar Yükleniyor..').then(message => {

var samira = samiraVideo[Math.floor(Math.random() * samiraVideo.length)];
          setTimeout(() =>
                     message.edit(`${samira}`), 3000);
  
});
  
  
  }
//ryze Son

  
  
  
//sejuani
if(args[0] ==="seju" || args[0] === 'sejuani') {
    const sejuVideo = [
   "https://youtu.be/K_YAE5MUg_o",
   "https://youtu.be/Bg5-J_bryDI",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var seju = sejuVideo[Math.floor(Math.random() * sejuVideo.length)];
            setTimeout(() =>
                       message.edit(`${seju}`), 3000);
    
  });
    
    
    }
//sejuani Son
  
  
  
  
  
  //senna
if(args[0] ==="senna") {
    const sennaVideo = [
   "https://youtu.be/caIogEz74eU",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var senna = sennaVideo[Math.floor(Math.random() * sennaVideo.length)];
            setTimeout(() =>
                       message.edit(`${senna}`), 3000);
    
  });
    
    
    }
//senna Son





  //seraphine
  if(args[0] ==="seraphine") {
    const seraphineVideo = [
   "https://youtu.be/yMiD-0ZSxcg",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var seraphine = seraphineVideo[Math.floor(Math.random() * seraphineVideo.length)];
            setTimeout(() =>
                       message.edit(`${seraphine}`), 3000);
    
  });
    
    
    }
//seraphine Son
  
  
  
  
  
  //sett
if(args[0] ==="sett" || args[0] === 'sett') {
    const settVideo = [
   "https://youtu.be/Q8t3xf4NDHg",
   "https://youtu.be/NIBF-cs9gxw",
   "https://youtu.be/q8dNF2NhekE",
   "https://youtu.be/U2Y5UBy9v2U",
   "https://youtu.be/RAcSavBV2t8",
   "https://youtu.be/LnbCPmiq1uk",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var sett = settVideo[Math.floor(Math.random() * settVideo.length)];
            setTimeout(() =>
                       message.edit(`${sett}`), 3000);
    
  });
    
    
    }
//sett Son
  
  
  
  
  
//shaco
if(args[0] ==="shaco") {
    const shacoVideo = [
   "https://youtu.be/Hz3Z9ENGtNk",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var shaco = shacoVideo[Math.floor(Math.random() * shacoVideo.length)];
            setTimeout(() =>
                       message.edit(`${shaco}`), 3000);
    
  });
    
    
    }
//shaco Son
  
  
  
  
  
  //shen
if(args[0] ==="shen") {
    const shenVideo = [
   "https://youtu.be/A_AeK29-gRg",
   "https://youtu.be/_6XXd_WwFgo",
   "https://youtu.be/aX8cCOQ-0RE",
   "https://youtu.be/PrZpDrte_ZA",
   "https://youtu.be/iU36SVTPJMU",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var shen = shenVideo[Math.floor(Math.random() * shenVideo.length)];
            setTimeout(() =>
                       message.edit(`${shen}`), 3000);
    
  });
    
    
    }
//shen Son
  
  
  
  
  
  //shyvana
if(args[0] ==="shyvana" || args[0] === 'shy') {
    const shyVideo = [
   "https://youtu.be/sCUGmCg8820",
   "https://youtu.be/AHdZ0V-DFYk",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var shy = shyVideo[Math.floor(Math.random() * shyVideo.length)];
            setTimeout(()=>
                       message.edit(`${shy}`), 3000);
    
  });
    
    
    }
//shyvana Son
  
  
  
  
  
//singed
if(args[0] =='singed') {
    const singedVideo = [
   "https://youtu.be/eo381eP4m78",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var singed = singedVideo[Math.floor(Math.random() * singedVideo.length)];
            setTimeout(() =>
                       message.edit(`${singed}`), 3000);
    
  });
    
    
    }
//singed Son
  
  
  
  
  
//sion
if(args[0] ==="sion") {
    const sionVideo = [
   "Kanalda henüz sion videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var sion = sionVideo[Math.floor(Math.random() * sionVideo.length)];
            setTimeout(()=>
                       message.edit(`${sion}`), 3000);
    
  });
    
    
    }
//sion Son
  
  
  
  
  
//sivir
if(args[0] ==="sivir") {
    const sivirVideo = [
   "Kanalda henüz sivir videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var sivir = sivirVideo[Math.floor(Math.random() * sivirVideo.length)];
            setTimeout(() =>
                       message.edit(`${sivir}`), 3000);
    
  });
    
    
    }
//sivir Son
  
  
  
  
  
//skarner
if(args[0] ==="skarner") {
    const skarnerVideo = [
   "Kanalda henüz skarner videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var skarner = skarnerVideo[Math.floor(Math.random() * skarnerVideo.length)];
            setTimeout(() =>
                       message.edit(`${skarner}`), 3000);
    
  });
    
    
    }
//skarner Son
  
  
  
  
  
  //sona
if(args[0] ==="sona") {
    const sonaVideo = [
   "Kanalda henüz sona videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var sona = sonaVideo[Math.floor(Math.random() * sonaVideo.length)];
            setTimeout(() =>
                       message.edit(`${sona}`), 3000);
    
  });
    
    
    }
//sona Son
  
  
  
  
  
  //soraka
if(args[0] ==="soraka") {
    const sorakaVideo = [
   "Kanalda henüz soraka videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var soraka = sorakaVideo[Math.floor(Math.random() * sorakaVideo.length)];
            setTimeout(() =>
                       message.edit(`${soraka}`), 3000);
    
  });
    
    
    }
//soraka Son
  
  
  
  
  
//swain
if(args[0] ==="swain") {
    const swainVideo = [
   "https://youtu.be/7C0a0GUzkEI",
   "https://youtu.be/EfEtZ8X52Bc",
   "https://youtu.be/aAtWy7dNjQs",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var swain = swainVideo[Math.floor(Math.random() * swainVideo.length)];
            setTimeout(() =>
                       message.edit(`${swain}`), 3000);
    
  });
    
    
    }
//swain Son
  
  
  
  
  
  //sylas
if(args[0] ==="sylas") {
    const sylasVideo = [
   "https://youtu.be/mLKaANBvdyc",
   "https://youtu.be/EhCm2WJ5XrA",
   "https://youtu.be/lCbZWjq_IVQ",
   "https://youtu.be/JrrhkzEk-y0",
   "https://youtu.be/enYIVYWc6G0",
   "https://youtu.be/9_KJXJweXdw",
   "https://youtu.be/nUUqpVDA7v0",
   "https://youtu.be/QZ5pkmiBBPo",
   "https://youtu.be/5PB6efR8ox4",
   "https://youtu.be/xSKV1N1DZcc",
   "https://youtu.be/ftqpjGXazpg",
   "https://youtu.be/REvxUZjvOOQ",
   "https://youtu.be/4iY-G5gsa1M",
   "https://youtu.be/hiG5mtBQzpg",
   "https://youtu.be/ze_fZxMhGtw",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var sylas = sylasVideo[Math.floor(Math.random() * sylasVideo.length)];
            setTimeout(() =>
                       message.edit(`${sylas}`), 3000);
    
  });
    
    
    }
//sylas Son
  
  
  
  
  
//syndra
if(args[0] ==="syndra") {
    const syndraVideo = [
   "https://youtu.be/ImXEB1NHZ6c",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var syndra = syndraVideo[Math.floor(Math.random() * syndraVideo.length)];
            setTimeout(() =>
                       message.edit(`${syndra}`), 3000);
    
  });
    
    
    }
//syndra Son
  
  
  
  
  //tahm kench
if(args[0] ==="tahmkench" || args[0] === 'tahm') {
    const tahmVideo = [
   "Kanalda henüz tahm kench videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var tahm = tahmVideo[Math.floor(Math.random() * tahmVideo.length)];
            setTimeout(() =>
                       message.edit(`${tahm}`), 3000);
    
  });
    
    
    }
//tahm kench Son
  
  
  
  
  
  //taliyah
if(args[0] ==="taliyah") {
    const taliyahVideo = [
   "https://youtu.be/qfdtlPq1e2g",
   "https://youtu.be/25ixyOGs9pk"
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var taliyah = taliyahVideo[Math.floor(Math.random() * taliyahVideo.length)];
            setTimeout(() =>
                       message.edit(`${taliyah}`), 3000);
    
  });
    
    
    }
//taliyah Son
  
  
  
  
  
//talon
if(args[0] ==="talon") {
    const talonVideo = [
   "https://youtu.be/QpgLey97kFo",
   "https://youtu.be/ToG2IswE4pY",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var talon = talonVideo[Math.floor(Math.random() * talonVideo.length)];
            setTimeout(() =>
                       message.edit(`${talon}`), 3000);
    
  });
    
    
    }
//talon Son
  
  
  
  
  
  //taric
if(args[0] ==="taric") {
    const taricVideo = [
   "Kanalda henüz taric videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var taric = taricVideo[Math.floor(Math.random() * taricVideo.length)];
            setTimeout(() =>
                       message.edit(`${taric}`), 3000);
    
  });
    
    
    }
//taric Son
  
  
  
  
  
//teemo
if(args[0] ==="teemo") {
    const teemoVideo = [
   "https://youtu.be/8dPow_9yMxs",
   "https://youtu.be/KcX_o_Leuto",
   "https://youtu.be/fpzUYQ6TDXA",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var teemo = teemoVideo[Math.floor(Math.random() * teemoVideo.length)];
            setTimeout(() =>
                       message.edit(`${teemo}`), 3000);
    
  });
    
    
    }
//teemo Son
  
  
  
  
  
//thresh
if(args[0] ==="thresh" || args[0] === 'th') {
    const thVideo = [
   "Kanalda henüz thresh videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var th = thVideo[Math.floor(Math.random() * thVideo.length)];
            setTimeout(() =>
                       message.edit(`${th}`), 3000);
    
  });
    
    
    }
//thresh Son
  
  
  
  
  
//tristana
if(args[0] ==="tristana" || args[0] === 'tris') {
    const trisVideo = [
   "https://youtu.be/PmP6_we0Gmg",
   "https://youtu.be/gmaVO0WwFO8",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var tris = trisVideo[Math.floor(Math.random() * trisVideo.length)];
            setTimeout(() =>
                       message.edit(`${tris}`), 3000);
    
  });
    
    
    }
//tristana Son
  
  
  
  
  
//trundle
if(args[0] ==="trundle") {
    const trundleVideo = [
   "https://youtu.be/YmGXmH00YyY",
   "https://youtu.be/pqTqLkcHsNw",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var trundle = trundleVideo[Math.floor(Math.random() * trundleVideo.length)];
            setTimeout(()=>
                       message.edit(`${trundle}`), 3000);
    
  });
    
    
    }
//trundle Son
  
  
  
  
  //tryndamere
if(args[0] ==="tryndamere" || args[0] === 'try' || args [0] === 'tryn') {
    const tryVideo = [
   "https://youtu.be/4LCzBTdXjh0",
   "https://youtu.be/RN02UnPQtbU",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var tryn = tryVideo[Math.floor(Math.random() * tryVideo.length)];
            setTimeout(() =>
                       message.edit(`${tryn}`), 3000);
    
  });
    
    
    }
//tryndamere Son
  
  
  
  
    
  //twistedfate
if(args[0] ==="twistedfate" || args[0] === 'tf' || args [0] === 'twisted') {
    const tfVideo = [
   "https://youtu.be/uRhwXtzcKbE",
   "https://youtu.be/gBPI35kPGrQ",
   "https://youtu.be/eK8yJH4sb8o",
   "https://youtu.be/pHHdWA7SKdQ",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var tf = tfVideo[Math.floor(Math.random() * tfVideo.length)];
            setTimeout(() =>
                       message.edit(`${tf}`), 3000);
    
  });
    
    
    }
//twistedfate Son

  


  
  
  //twitch
if(args[0] ==="twitch" || args[0] === 'tw') {
    const twVideo = [
   "https://youtu.be/rO219EVVoXM",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var tw = twVideo[Math.floor(Math.random() * twVideo.length)];
            setTimeout(() =>
                       message.edit(`${tw}`), 3000);
    
  });
    
    
    }
//twitch Son
  
  
  
  
  
    
  //udyr
if(args[0] === "udyr") {
    const udyrVideo = [
   "https://youtu.be/bi49XL3sFvQ",
   "https://youtu.be/8TnCxNwfgyk",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var udyr = udyrVideo[Math.floor(Math.random() * udyrVideo.length)];
            setTimeout(() =>
                       message.edit(`${udyr}`), 3000);
    
  });
    
    
    }
//udyr Son
  
  
  
  
  
  
    
  //urgot
if(args[0] ==="urgot") {
    const urgotVideo = [
   "https://youtu.be/OEXtCL43lAI",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var urgot = urgotVideo[Math.floor(Math.random() * urgotVideo.length)];
            setTimeout(() =>
                       message.edit(`${urgot}`), 3000);
    
  });
    
    
    }
//urgot Son

  
  
  
  
    //varus
if(args[0] ==="varus") {
    const varusVideo = [
   "https://youtu.be/dmLZBbwI_YU",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var varus = varusVideo[Math.floor(Math.random() * varusVideo.length)];
            setTimeout(() =>
                       message.edit(`${varus}`), 3000);
    
  });
    
    
    }
//varus Son

  
  
  
  
  //vayne
if(args[0] ==="vayne") {
    const vayneVideo = [
   "Kanalda henüz vayne videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var vayne = vayneVideo[Math.floor(Math.random() * vayneVideo.length)];
            setTimeout(() =>
                       message.edit(`${vayne}`), 3000);
    
  });
    
    
    }
//vayne Son

  
  
  
  
  //veigar
if(args[0] ==="veigar" || args[0] === 'vei') {
    const veiVideo = [
   "Kanalda henüz veigar videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var vei = veiVideo[Math.floor(Math.random() * veiVideo.length)];
            setTimeout(() =>
                       message.edit(`${vei}`), 3000);
    
  });
    
    
    }
//veigar Son

  
  
  
  
  //vel'koz
if(args[0] ==="velkoz") {
    const velKozVideo = [
   "Kanalda henüz vel'koz videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var velKoz = velKozVideo[Math.floor(Math.random() * velKozVideo.length)];
            setTimeout(() =>
                       message.edit(`${velKoz}`), 3000);
    
  });
    
    
    }
//vel'koz Son

  
  
  
  
  //vi
if(args[0] ==="vi") {
    const viVideo = [
   "https://youtu.be/-fOCNkX1mCU",
   "https://youtu.be/YRnpkOfVB94",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var vi = viVideo[Math.floor(Math.random() * viVideo.length)];
            setTimeout(() =>
                       message.edit(`${vi}`), 3000);
    
  });
    
    
    }
//vi Son

  
  
  
  
  //viktor
if(args[0] ==="viktor") {
    const viktorVideo = [
   "Kanalda henüz viktor videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var viktor = viktorVideo[Math.floor(Math.random() * viktorVideo.length)];
            setTimeout(() =>
                       message.edit(`${viktor}`), 3000);
    
  });
    
    
    }
//viktor Son

  
  
  
  
  //vladimir
if(args[0] ==="vladimir" || args[0] === 'vlad') {
    const vladVideo = [
   "Kanalda henüz vladimir videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var vlad = vladVideo[Math.floor(Math.random() * vladVideo.length)];
            setTimeout(() =>
                        message.edit(`${vlad}`), 3000);
    
  });
    
    
    }
//vladimir Son

  
  
  
  
  //volibear
if(args[0] ==="volibear" || args[0] === 'voli') {
    const voliVideo = [
   "https://youtu.be/sZ0awginpc8",
   "https://youtu.be/pXI8PsWXD6c",
   "https://youtu.be/VLI2IIORRmk",
   "https://youtu.be/fh6KNd8H09w",
   "https://youtu.be/1-bgTMlu220",
   "https://youtu.be/f_Hg5E4AUv0",
   "https://youtu.be/UQQyR1KpZ6A",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var voli = voliVideo[Math.floor(Math.random() * voliVideo.length)];
            setTimeout(() =>
                       message.edit(`${voli}`), 3000);
    
  });
    
    
    }
//volibear Son

  
  
  
  
  //warwick
if(args[0] ==="warwick" || args[0] === 'ww') {
    const wwVideo = [
   "https://youtu.be/cRFnDurh5xU",
   "https://youtu.be/rofdgd5JcvU",
   "https://youtu.be/daXomgljOvU",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var ww = wwVideo[Math.floor(Math.random() * wwVideo.length)];
            setTimeout(() =>
                       message.edit(`${ww}`), 3000);
    
  });
    
    
    }
//warwick Son

  
  
  
  
  //wukong
if(args[0] ==="wukong") {
    const wukongVideo = [
   "https://youtu.be/e-5poo7cbUQ",
   "https://youtu.be/jYDoVBrewCo",
   "https://youtu.be/dFeqKcytL3g",
   "https://youtu.be/C9744e1B1fs",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var wukong = wukongVideo[Math.floor(Math.random() * wukongVideo.length)];
            setTimeout(() =>
                       message.edit(`${wukong}`), 3000);
    
  });
    
    
    }
//wukong Son

  
  
  
  
  //xayah
if(args[0] ==="xayah") {
    const xayahVideo = [
   "Kanalda henüz xayah videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var xayah = xayahVideo[Math.floor(Math.random() * xayahVideo.length)];
            setTimeout(() =>
                       message.edit(`${xayah}`), 3000);
    
  });
    
    
    }
//xayah Son

  
  
  
  
  //xerath
if(args[0] ==="xerath") {
    const xerathVideo = [
   "Kanalda henüz xerath videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var xerath = xerathVideo[Math.floor(Math.random() * xerathVideo.length)];
            setTimeout(() =>
                       message.edit(`${xerath}`), 3000);
    
  });
    
    
    }
//xerath Son

  
  
  
  
  //xin zhao
if(args[0] ==="xinzhao" || args[0] === 'xin') {
    const xinVideo = [
   "https://youtu.be/b4fmCqpmmwA",
   "https://youtu.be/aXGvKpNM-sE",
   "https://youtu.be/hqCzOTOlu0U",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var xin = xinVideo[Math.floor(Math.random() * xinVideo.length)];
            setTimeout(() =>
                       message.edit(`${xin}`), 3000);
    
  });
    
    
    }
//xin zhao Son

  
  
  
  
  //yasuo
if(args[0] ==="yasuo" || args[0] === 'yasu' || args [0] === 'yas') {
    const yasuVideo = [
   "https://youtu.be/to7ZTyi9RS4",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var yasu = yasuVideo[Math.floor(Math.random() * yasuVideo.length)];
            setTimeout(() =>
                       message.edit(`${yasu}`), 3000);
    
  });
    
    
    }
//yasuo Son

  
  
  

  //yone
  if(args[0] ==="yone") {
    const yoneVideo = [
   "https://youtu.be/_RxiJRHFQyM",
   "https://youtu.be/cXU9eYiSCBg",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var yone = yoneVideo[Math.floor(Math.random() * yoneVideo.length)];
            setTimeout(() =>
                       message.edit(`${yone}`), 3000);
    
  });
    
    
    }
//yone Son



  //yorick
if(args[0] ==="yorick") {
    const yorickVideo = [
   "Kanalda henüz yorick videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var yorick = yorickVideo[Math.floor(Math.random() * yorickVideo.length)];
            setTimeout(() =>
                       message.edit(`${yorick}`), 3000);
    
  });
    
    
    }
//yorick Son

  
  
  
  
  //yuumi
if(args[0] ==="yuumi") {
    const yuumiVideo = [
   "https://youtu.be/DQ0ylXM_2CA",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var yuumi = yuumiVideo[Math.floor(Math.random() * yuumiVideo.length)];
            setTimeout(() =>
                       message.edit(`${yuumi}`), 3000);
    
  });
    
    
    }
//yuumi Son

  
  
  
  
  //zac
if(args[0] ==="zac") {
    const zacVideo = [
   "Kanalda henüz zac videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var zac = zacVideo[Math.floor(Math.random() * zacVideo.length)];
            setTimeout(() =>
                       message.edit(`${zac}`), 3000);
    
  });
    
    
    }
//zac Son

  
  
  
  
  //zed
if(args[0] ==="zed") {
    const zedVideo = [
   "https://youtu.be/U1D_ytLRLyY",
   "https://youtu.be/K3YJdGK_qpI",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var zed = zedVideo[Math.floor(Math.random() * zedVideo.length)];
            setTimeout(() =>
                       message.edit(`${zed}`), 3000);
    
  });
    
    
    }
//zed Son

  
  
  
  
  //ziggs
if(args[0] ==="ziggs") {
    const ziggsVideo = [
   "Kanalda henüz ziggs videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var ziggs = ziggsVideo[Math.floor(Math.random() * ziggsVideo.length)];
            setTimeout(() =>
                       message.edit(`${ziggs}`), 3000);
    
  });
    
    
    }
//ziggs Son

  
  
  
  
  //zilean
if(args[0] ==="zilean") {
    const zileanVideo = [
   "Kanalda henüz zilean videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var zilean = zileanVideo[Math.floor(Math.random() * zileanVideo.length)];
            setTimeout(() =>
                       message.edit(`${zilean}`), 3000);
    
  });
    
    
    }
//zilean Son

  
  
  
  
  //zoe
if(args[0] ==="zoe") {
    const zoeVideo = [
   "Kanalda henüz zoe videosu bulunmamaktadır.",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var zoe = zoeVideo[Math.floor(Math.random() * zoeVideo.length)];
            setTimeout(() =>
                       message.edit(`${zoe}`), 3000);
    
  });
    
    
    }
//zoe Son

  
  
  
  
  //zyra
if(args[0] ==="zyra") {
    const zyraVideo = [
   "https://youtu.be/syWXTE6nvaI",
               ];
  
  message.channel.send('Videolar Yükleniyor..').then(message => {

var zyra = zyraVideo[Math.floor(Math.random() * zyraVideo.length)];
            setTimeout(() =>
                       message.edit(`${zyra}`), 3000);
    
  });
    
    
    }
//zyra Son
  
  
  
  
  let şampiyonlar = [
    "aatrox",
    "ahri",
    "akali",
    "alistar",
    "amumu",
    "anivia",
    "annie",
    "aphelios",
    "ashe",
    "aurelionsol",
    "aurelion",
    "asol",
    "azir",
    "bard",
    "blitzcrank",
    "bc",
    "blitz",
    "brand",
    "braum",
    "caitlyn",
    "cait",
    "camille",
    "cassiopeia",
    "cassi",
    "chogath",
    "cho",
    "corki",
	"dari",
    "darius",
    "diana",
    "drmundo",
    "dr.mundo",
    "mundo",
    "draven",
    "ekko",
    "elise",
    "evelynn",
    "eve",
    "ezreal",
    "ez",
    "fiddlesticks",
    "fiora",
    "fizz",
    "gallio",
    "gp",
    "gangplak",
    "garen",
    "gnar",
    "gragas",
    "graves",
    "hecarim",
    "heim",
    "heimerdinger",
    "heimer",
    "illaoi",
    "irelia",
    "ivern",
    "janna",
    "jarvan",
    "j4",
    "jarvan4",
    "jarvaniv",
    "jax",
    "jayce",
    "jhin",
    "jinx",
    "kaisa",
    "kalista",
    "karma",
    "karthus",
    "kassadin",
    "karma",
    "katarina",
    "kata",
    "kayle",
    "kayn",
    "kennen",
    "khazix",
    "kha",
    "kindred",
    "kled",
    "kogmav",
    "leblanc",
    "lb",
    "lee",
    "leesin",
    "leona",
    "lillia",
    "lissandra",
    "liss",
    "luci",
    "lulu",
    "lux",
    "malp",
    "malphite",
    "malzahar",
    "maokai",
    "master",
    "yi",
    "masteryi",
    "missfortune",
    "mf",
    "morde",
    "mordekaiser",
    "morgana",
    "nami",
    "nasus",
    "nautilus",
    "naut",
    "neeko",
    "nedalee",
    "nocturne",
    "nunu",
    "olaf",
    "orianna",
    "ornn",
    "pantheon",
    "pant",
    "poppy",
    "pyke",
    "qiyana",
    "quinn",
    "rakan",
    "rammus",
    "reksai",
    "renekton",
    "rengar",
    "riven",
    "rumble",
    "ryze",
    "samira",
    "seju",
    "sejuani",
    "senna",
    "seraphine",
    "sett",
    "shaco",
    "shenn",
    "shyvana",
    "shy",
    "sion",
    "sivir",
    "skarner",
    "soraka",
    "swain",
    "sylas",
    "syndra",
    "tahm",
    "tahmkench",
    "tahm",
    "taliyah",
    "talon",
    "taric",
    "teemo",
    "thresh",
    "tris",
    "tristana",
    "trundle",
    "try",
    "tryn",
    "tryndamere",
    "twidtedfate",
    "twisted",
    "tf",
    "tw",
    "twitch",
    "urgot",
    "udyr",
    "varus",
    "vayne",
    "velkoz",
    "veigar",
    "vei",
    "vi",
    "viktor",
    "vlad",
    "vladimir",
    "voli",
    "volibear",
    "ww",
    "warwick",
    "wukong",
    "xayah",
    "xerath",
    "xin",
    "xinzhao",
    "yasuo",
    "yone",
    "yorick",
    "yuumi",
    "zac",
    "zed",
    "ziggs",
    "zilean",
    "zoe",
    "zyra"
  ];

  let argüman = args[0];
  if (!şampiyonlar.includes(args[0]))
    return message.channel.send(new Discord.RichEmbed().setDescription(`${client.emojis.get(client.emojiler.x)} | **Hata:** ${argüman} adlı şampiyon veya şampiyon kısaltması bulunamadı!`).setColor(message.guild.me.displayColor));
	
	
	
	
	

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rastgelevideo'],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'rastgele-video',
  description: 'Girilen şampiyonla ilgili rastgele video atar.',
  usage: 'video [şampiyon adı]'
};