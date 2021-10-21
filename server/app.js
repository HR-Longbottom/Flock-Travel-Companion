const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const path = require("path");
const controller = require("./controllers");

const dbMain = require("../database/dbMain/connection.js");
const dbChat = require("../database/dbChat/connection.js");

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressStaticGzip(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("/flightoffers", controller.getFlightOffers);
app.post("/messageData", controller.sendMessage);
app.get("/messageData", controller.getMessages);
app.post("/createUser", controller.createUser);
app.post("/createFlight", controller.createFlight);
app.get("/readGroupDetails", controller.readGroupDetails);
app.get("/readPersonalFlights", controller.readPersonalFlights);
app.get("/readGroupFlights", controller.readGroupFlights);
app.post("/createGroup", controller.createGroup);
app.put('/updateUserLoc', controller.updateUserLoc);
app.get('/findGroups', controller.findGroups);

app.get("/checkUser", controller.checkUser);

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/dist/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

module.exports = app;
