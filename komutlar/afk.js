const db = require("quick.db")
const Discord = require("discord.js")
const ayarlar = require('../ayarlar.json')
let prefix= ayarlar.prefix

exports.run = function(client, message, args) {


var USER = message.author;
var REASON = args.slice(0)