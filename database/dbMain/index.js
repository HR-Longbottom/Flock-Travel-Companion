const mongoose = require("mongoose");

const flightSchema = mongoose.Schema({
  uid: { type: String, require: true },
  groupName: { type: String, require: true },
  departureTime: String,
  departureDate: String,
  carrier: String,
  arrivalTime: String,
  arrivalDate: String,
  departureAirport: String,
  arrivalAirport: String,
});

const userSchema = mongoose.Schema({
  email: { type: String, index: { unique: true }, require: true },
  uid: String,
  name: String,
  location: String,
});

const groupSchema = mongoose.Schema({
  name: { type: String, index: { unique: true }, require: true },
  members: [{ type: String }],
  bulletin: [{ type: String }],
  admin: String
});

const Flights = mongoose.model("Flights", flightSchema);
const Users = mongoose.model("Users", userSchema);
const Groups = mongoose.model("Groups", groupSchema);

module.exports = { Flights, Users, Groups };
