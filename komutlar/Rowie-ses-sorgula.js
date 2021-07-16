const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
//-------------------------------------------------------------------------------\\
  
if(!["852855653817909332"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\  
  
  
let rowie;
let rowie1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let rowie2 = message.guild.members.cache.get(args[0]);
if(!rowie1) return message.channel.send(new MessageEmbed().setTimestamp().setColor('0x800d0d').setDescription(`Bir ID Girmelisin Veya Kullanıcı Etiketlemelisin`))
if (rowie1) {
rowie = rowie1;
}
if (rowie2) {
rowie = rowie2;
}
if (!rowie) {
rowie = message.member;
}
let ses = rowie.voice.channel;
if (!ses) {
message.channel.send(new MessageEmbed().setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("**<@"+rowie.id+"> Bir Sesli Kanalda Değil!**"));
}
if (ses) {
message.channel.send(new MessageEmbed().setColor('#7289D').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(
"**<@"+rowie.id+"> İsimli Kişi `"+ses.name+"` İsimli Kanalda!**"
));
}};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sorgula"],
    permLevel: 0,
    name: "sorgula"
  }
  
  exports.help = {
    name: "kontrol"
  };
  
  