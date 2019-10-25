const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("634692308813479956")
setInterval(function() {
channel.send(`عمككككككككك 77 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
