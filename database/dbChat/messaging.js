const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  uid: String,
  text: String,
  createdAt: String,
  timestamp: { type: Date, default: Date.now },
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = { Messages };
