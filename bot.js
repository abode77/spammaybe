const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("623580890991296549")
setInterval(function() {
channel.send(`jfbhxfbybfdsgfxybdrfbdyvgfdf`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
