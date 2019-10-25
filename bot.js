const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("634494266223099916")
setInterval(function() {
channel.send(`77 احم احم `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
