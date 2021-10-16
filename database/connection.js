const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch((err) => {
    console.log("Failed to connect to DB: ", err);
  });

const db = mongoose.connection;

module.exports = db;
