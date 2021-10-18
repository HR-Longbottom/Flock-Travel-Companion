const mongoose = require("mongoose");

const flightSchema = mongoose.schema({
  departureTime: Number,
  callsign: String,
  arrivalTime: Number,
  departureAirport: String,
  arrivalAirport: String,
});

const userSchema = mongoose.schema({
  firstName: String,
  lastName: String,
});

const Flights = mongoose.model("Flights", flightSchema);
const Users = mongoose.model("Users", userSchema);

module.exports = { Flights, Users, Chats };
