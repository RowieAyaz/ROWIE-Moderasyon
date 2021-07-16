const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[BOT] |  komutları başarıyla yüklendi`);
  console.log(`[BOT] | (${client.user.username}) Rowie Aktif
  ‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);
  client.user.setStatus("online");
  client.user.setActivity("Rowie ❤️", { type: "WATCHING"});
  console.log(`Rowie Botu Başarılı Bir Şekilde Aktif`);

  console.log (`Kullanıcı İsmi     : ${client.user.username}`);
  console.log (`Prefix             : ${ayarlar.prefix}`);
  console.log (`Durum              : Rowie Çevrimiçi!`);

};
