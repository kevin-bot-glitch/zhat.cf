module.exports = () => {
  const Zhat = require("zhat.js");
  const client = new Zhat.Client();
  
  client.on("ready", () => {
    console.log(`Login as ${client.user.Username}`)
  });
  
  let prefix = "!";
  
  client.on("message", async message => {
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    
    if (cmd == "help") {
      return message.author.send("Help your self");
    }
    
    if (cmd == "ping") {
      let timeNow = Date.now();
      return message.author.send(`ping: ${timeNow - message.createAt}ms`)
    }
  });
  
  client.login(process.env.ZHAT);
};