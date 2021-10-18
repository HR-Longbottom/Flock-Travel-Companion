const mongoose = require("mongoose");

const messageSchema = mongoose.schema({
  createdAt: { type: Date, default: Date.now },
  text: String,
});

const Messages = mongoose.model("Messages", messageSchema);
