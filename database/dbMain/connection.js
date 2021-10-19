const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MAIN_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to main DB");
  })
  .catch((err) => {
    console.log("Failed to connect to main DB: ", err);
  });

const dbMain = mongoose.connection;

module.exports = dbMain;
