const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MAIN_URI;

const dbMain = mongoose.createConnection(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

dbMain.on("error", () => {
  console.log("Failed to connect to main DB");
});

dbMain.once("open", () => {
  console.log("Successfully connected to main DB");
});

module.exports = dbMain;
