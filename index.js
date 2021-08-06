const client = require("./Client");
const fs = require("fs");

client.on("ready", () => {
  console.log("Work!!")
});

client.on('message',(msg) =>{
  console.log(msg.content)
  if(msg.content=='hi' || 'h' || 'i'){
    msg.reply("hi ,How about you?")
    msg.reply(":poop:")
    msg.reply(":star:")
    msg.react("💩")
    // msg.send(":poop:")
    // msg.send("💩")
  }
  if(msg.content=="gg"){
    msg.react("💩")
  }
  
})
