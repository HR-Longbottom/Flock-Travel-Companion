const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MESSAGE_URI;

const dbChat = mongoose.createConnection(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

dbChat.on("error", () => {
  console.log("Failed to connect to chat DB");
});

dbChat.once("open", () => {
  console.log("Successfully connected to chat DB");
});

module.exports = dbChat;
