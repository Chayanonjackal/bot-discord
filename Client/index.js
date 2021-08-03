const { Client } = require("discord.js");
const { token } = require("../Config/bot");

const client = new Client();
client.login(token);
module.exports = client;
