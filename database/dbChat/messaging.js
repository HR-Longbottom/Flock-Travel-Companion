const mongoose = require("mongoose");
const dbChat = require('./connection.js')

const messageSchema = mongoose.Schema({
  name: String,
  uid: String,
  text: String,
  createdAt: String,
  group: String,
  timestamp: { type: Date, default: Date.now },
});

const Messages = dbChat.model("Messages", messageSchema);

module.exports = { Messages };
