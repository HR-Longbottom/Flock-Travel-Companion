var axios = require("axios");
const dbChat = require("./../../database/dbChat/messaging.js");
const dbMain = require("./../../database/dbMain/index.js");

module.exports = {
  // contact the api to get flight offers with parameters of origin location code, destination location code, departure date, and optional return date
  getFlightOffers: (params) => {
    if (params.returnDate) {
      return axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${params.originLocationCode}&destinationLocationCode=${params.destinationLocationCode}&departureDate=${params.departureDate}&returnDate=${params.returnDate}&adults=1&max=100&currencyCode=USD`,
        {headers: {'Authorization': 'Bearer t9pS4aWyx303A5GG6fEb80n563Ig'}}
      );
    } else {
      return axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${params.originLocationCode}&destinationLocationCode=${params.destinationLocationCode}&departureDate=${params.departureDate}&adults=1&max=100&currencyCode=USD`,
        {headers: {'Authorization': 'Bearer t9pS4aWyx303A5GG6fEb80n563Ig'}}
      );
    }
  },

  /*
  =================================================
  Home Page
  =================================================
  */

  createGroup: (params, callback) => {
    dbMain.Groups.create(params, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

  readPersonalFlights: (params, callback) => {
    db.Flights.find({ uid: params.uid });
  },

  /*
  =================================================
  Group Page
  =================================================
  */

  // get details of group based on group name
  readGroupDetails: (params, callback) => {
    dbMain.Groups.find({ name: params.name }, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

  // post group bulletin given group name
  postGroupBulletin: (params, callback) => {
    dbMain.Groups.update(
      { name: params.name },
      { $push: { bulletin: params.bulletin } },
      (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
        }
      }
    );
  },

  // create flight if person does not have flight in the group otherwise just update flight info
  createFlight: (params, callback) => {
    var filter = { uid: params.uid };
    var update = params;
    dbMain.Flights.findOne(filter, (err, result) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        if (result.length !== 0) {
          dbMain.Flights.updateOne(filter, update, (err, result) => {
            if (err) {
              callback(err);
            } else {
              console.log(" updated");
              callback(null, result);
            }
          });
        } else {
          dbMain.Flights.create(update, (err, result) => {
            if (err) {
              callback(err);
            } else {
              console.log("new created");
              callback(null, result);
            }
          });
        }
      }
    });
  },

  readGroupFlights: (params, callback) => {
    db.Flights.find({ groupName: params.name }, (err, docs) => {
      if (err) {
        callback(err);
      } else {
        callback(null, docs);
      }
    });
  },

  /*
  =================================================
  Login Page
  =================================================
  */

  createUser: (params, callback) => {
    dbMain.Users.create(
      { email: params.email, uid: params.uid, name: params.displayName },
      (err, res) => {
        if (err) {
          callback("models err", err);
        } else {
          callback(null, res);
        }
      }
    );
  },
  checkUser: (params, callback) => {
    dbMain.Users.find({ uid: params }, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  },

  updateUserLoc: (params) => {
    //...
  },

  /*
  =================================================
  Messaging Page
  =================================================
  */

  chatPost: (body) => {
    return new Promise((resolve, reject) => {
      dbChat
        .Messages(body)
        .save()
        .then((chatObj) => {
          resolve(chatObj);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  readChats: (params, callback) => {
    return new Promise((resolve, reject) => {
      dbChat.Messages.find({})
        .then((chatData) => {
          resolve(chatData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
