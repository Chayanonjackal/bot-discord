const client = require("./Client");
const fs = require("fs");

client.on("ready", () => {
  console.log("Work!!")
});

client.on("channelCreate", (channel) => {
  let x = channel.guild.me.joinedTimestamp / 1000
      if(x <= (x+10)) return; // if the bot just joined the server the channelcreate event will get activated after 10 sec
      console.log("Valid event!");
  });

client.on('message',(msg) =>{
  console.log(msg.content)
  if(msg.content == 'hi'){
    msg.reply("hi!?")
    msg.react("💩")
  }
 
})


