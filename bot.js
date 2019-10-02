const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("621022081982791693")
setInterval(function() {
channel.send(`soamingg ffff ttt ggrdf fram faem farm`);
}, 30)
})

client.login(process.env.BOT_TOKEN);