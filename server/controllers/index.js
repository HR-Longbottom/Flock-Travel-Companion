var model = require("../models");

module.exports = {
  getFlightOffers: (req, res) => {
    model
      .getFlightOffers(req.query)
      .then((data) => {
        console.log('successful')
        res.json(data.data);
      })
      .catch((err) => {
        console.log('this is error', err)
        res.send(err);
      });
  },

  /*
  =================================================
  Home Page
  =================================================
  */

  createGroup: (req, res) => {
    model.createGroup(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send("successfully created group");
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

  updateUserLoc: (req, res) => {
    model.updateUserLoc(req.body, (err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send("successfully updated user location");
      }
    });
  },

  /*
  =================================================
  Group Page
  =================================================
  */

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
