var model = require("../models");

module.exports = {
  getFlightOffers: (req, res) => {
    model
      .getFlightOffers(req.body)
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {
        res.send(err);
      });
  },

  /*
  =================================================
  Home Page
  =================================================
  */

  createGroup: (req, res) => {
    var name = req.body.name;
    var members = req.body.members;
    var bulletin = req.body.bulletin;
    model.createGroup(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send("successfully added group info");
      }
    });
  },

  //for home page
  readPersonalFlights: (req, res) => {
    model.retrievePersonalFlights(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data.data);
      }
    });
  },

  /*
  =================================================
  Group Page
  =================================================
  */
  viewAllGroups: (req, res) => {
    model.viewAllGroups((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });
  },

  readGroupDetails: (req, res) => {
    model.readGroupDetails(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json(data.data);
      }
    });
  },

  postGroupBulletin: (req, res) => {
    model.postGroupBulletin(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json(data.data);
      }
    });
  },

  // for creating an itinerary
  createFlight: (req, res) => {
    model.createFlight(req.body, (err, res) => {
      if (err) {
        res.send(err);
      } else {
        res.send("flight successfuly added to itinerary!");
      }
    });
  },

  // for group page
  readGroupFlights: (req, res) => {
    model.retrieveGroupFlights(req.body),
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.json(data);
        }
      };
  },

  /*
  =================================================
  Login Page
  =================================================
  */

  createUser: (req, res) => {
    model.createUser(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send("successfully added user info");
      }
    });
  },
  checkUser: (req, res) => {
    model.checkUser(req.query.uid, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },

  updateUserLoc: (req, res) => {
    model.updateUserLoc(req.body, (err, res) => {
      if (err) {
        res.send(err);
      } else {
        res.send("successfully updated user email");
      }
    });
  },

  /*
  =================================================
  Messaging Page
  =================================================
  */
  // for chat box
  sendMessage: (req, res) => {
    model
      .chatPost(req.body)
      .then((chatData) => {
        res.json(chatData.data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  getMessages: (req, res) => {
    model
      .readChats(req.query)
      .then((chatData) => {
        res.json(chatData);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
