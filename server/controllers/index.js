var model = require("../models");

module.exports = {
  getFlightOffers: (req, res) => {
    console.log(req.query);
    model
      .getFlightOffers(req.query)
      .then((data) => {
        console.log('successful')
        console.log(data.data);
        res.send(data.data);
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
    console.log('personal flights body:' , req.query)
    model.readPersonalFlights(req.query, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  },

  findGroups: (req, res) => {
    model.findGroups(req.query, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data)
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

  inviteGroupMember: (req, res) => {
    console.log(req.body);
    model.inviteGroupMember(req.body, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send('Successfully added members');
      }
    })
  },

  readGroupDetails: (req, res) => {
    model.readGroupDetails(req.query, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });
  },

  deleteGroupBulletin: (req, res) => {
    console.log(req.body);
    model.deleteGroupBulletin(req.body, (err, data) => {
      if (err){
        res.send(err)
      } else {
        res.json(data)
      }
    })
  },

  postGroupBulletin: (req, res) => {
    model.postGroupBulletin(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });
  },

  deleteGroup: (req, res) => {

    model.deleteGroup(req.body, (err,data) => {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    })
  },

  // for creating an itinerary
  createFlight: (req, res) => {
    model.createFlight(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        console.log(data);
        res.send("flight successfuly added to itinerary!");
      }
    });
  },

  // for group page
  readGroupFlights: (req, res) => {
    model.readGroupFlights(req.query,
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.json(data);
        }
      });
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
