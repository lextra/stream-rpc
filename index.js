const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - Rich Presence started!`);

  const presence = new Discord.RichPresence()
    .setApplicationId('')
    .setType('STREAMING') // STREAMING, LISTENING, PLAYING.
    .setURL('https://fraud.gay') // Use any link if you don't want it to say "Watch", otherwise put "twitch" or "youtube".
    .setState('/desperate')
    .setName('https://fraud.gay')
    .setDetails('/desperate')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('')
    .setAssetsLargeText('/desperate') // Text displayed when hovering over the large image.
    .setAssetsSmallImage('')
    .setAssetsSmallText('᲼᲼') // Text displayed when hovering over the small image.
    .addButton('/desperate', 'https://fraud.gay')
    .addButton('loc#0001', 'https://discord.gg/desperate');

  client.user.setActivity(presence);
  client.user.setPresence({ status: "dnd" }); // dnd, online, offline, idle
});

client.login(process.env.TOKEN);