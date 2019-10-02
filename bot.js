const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("628888549214781452")
setInterval(function() {
channel.send(`jfbhxfbybfdsgfxybdrfbdyvgfdf`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
