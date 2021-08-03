const client = require("./Client");
const fs = require("fs");

client.on("ready", () => {
  const fileName = fs
    .readdirSync("./logs")
    .filter((name) => name.endsWith(".log"));
  fileName.forEach((name) => {
    try {
      let text = name+"\n";

    } catch (err) {
      console.error(err);
    }
  });
});
