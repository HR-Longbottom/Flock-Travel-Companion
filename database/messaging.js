const mongoose = require("mongoose");

const messageSchema = mongoose.schema({});

const Messages = mongoose.model("Messages", messageSchema);
