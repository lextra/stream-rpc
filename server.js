const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`discord.gg/desperate lol`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;
