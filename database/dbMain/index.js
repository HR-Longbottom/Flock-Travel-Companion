const mongoose = require("mongoose");
const dbMain = require("./connection.js");

const flightSchema = mongoose.Schema({
  uid: { type: String, require: true },
  groupName: { type: String, require: true },
  departureTime: Number,
  callsign: String,
  arrivalTime: Number,
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
  admin: String,
});

const Flights = dbMain.model("Flights", flightSchema);
const Users = dbMain.model("Users", userSchema);
const Groups = dbMain.model("Groups", groupSchema);

module.exports = { Flights, Users, Groups };
