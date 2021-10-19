const mongoose = require("mongoose");

const flightSchema = mongoose.schema({});

const userSchema = mongoose.schema({});

const chatSchema = mongoose.schema({});

const Flights = mongoose.model("Flights", flightSchema);
const Users = mongoose.model("Users", userSchema);
const Chats = mongoose.model("Chats", chatSchema);

module.exports = { Flights, Users, Chats };
