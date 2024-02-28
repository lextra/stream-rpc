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
    .setURL('https://bloody.bio/x') // Use any link if you don't want it to say "Watch", otherwise put "twitch" or "youtube".
    .setState('##')
    .setName('##')
    .setDetails('##')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://i1.sndcdn.com/artworks-HM0l2uGFCDCyO7Eh-NGAVkw-t200x200.jpg')
    .setAssetsLargeText('᲼᲼') // Text displayed when hovering over the large image.
    .setAssetsSmallImage('')
    .setAssetsSmallText('᲼᲼') // Text displayed when hovering over the small image.
    .addButton('᲼᲼', 'https://bloody.bio/x')
    .addButton('᲼᲼', 'https://bloody.bio/x');

  client.user.setActivity(presence);
  client.user.setPresence({ status: "dnd" }); // dnd, online, offline, idle
});

client.login(process.env.TOKEN);
