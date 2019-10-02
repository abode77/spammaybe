const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("628619619485220904")
setInterval(function() {
channel.send(`jfbhxfbybfdsgfxybdrfbdyvgfdf`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
