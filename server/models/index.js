var axios = require("axios");
const dbChat = require("./../../database/dbChat/messaging.js");
const dbMain = require("./../../database/dbMain/index.js");
const headers = require('./../../config.js').headers;

module.exports = {
  // contact the api to get flight offers with parameters of origin location code, destination location code, departure date, and optional return date
  getFlightOffers: (params) => {
    if (params.returnDate) {
      return axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${params.originLocationCode}&destinationLocationCode=${params.destinationLocationCode}&departureDate=${params.departureDate}&returnDate=${params.returnDate}&adults=1&max=100&currencyCode=USD`,
        headers
      );
    } else {
      return axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${params.originLocationCode}&destinationLocationCode=${params.destinationLocationCode}&departureDate=${params.departureDate}&adults=1&max=100&currencyCode=USD`,
        headers
      );
    }
  },

  /*
  =================================================
  Home Page
  =================================================
  */
  createGroup: (params, callback) => {
    dbMain.Groups.create({name: params.groupName, members: [params.uid], admin: params.uid}, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  },

  findGroup: (params, callback) => {
    dbMain.Groups.find({ admin: params }, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  },


  updateUserLoc: (params) => {
    // dbMain.Users.findAndModify({query: {uid: params.uid}, update: {}})
  },

  readPersonalFlights: (params, callback) => {
    db.Flights.find({ uid: params.uid });
  },

  /*
  =================================================
  Group Page
  =================================================
  */

  inviteGroupMember: (params, callback) => {
    dbMain.Users.find({email: params.email} , (err, data) => {
      if (err) {
        callback(err);
      } else {
        if (data.length === 0) {
          callback('User does not exist');
        } else {
          dbMain.Groups.updateOne({ name: params.groupName },
            { $push: { members: data[0].uid } } , (err, data) => {
              if (err) {
                callback(err);
              } else {
                callback(null, data);
              }
            })
          }
        }
    })
  }
  ,
  // get details of group based on group name
  readGroupDetails: (params, callback) => {
    dbMain.Groups.find({ name: params.name }, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data[0]);
      }
    });
  },

  deleteGroupBulletin: (params, callback) => {
    dbMain.Groups.updateOne({name:params.name}, {bulletin: params.bulletin}, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

  // post group bulletin given group name
  postGroupBulletin: (params, callback) => {
    dbMain.Groups.updateOne(
      { name: params.name },
      { $push: { bulletin: params.bullet } },
      (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
        }
      }
    );
  },

  deleteGroup: (params, callback) => {
    dbMain.Groups.deleteOne(params, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },

  // create flight if person does not have flight in the group otherwise just update flight info
  createFlight: (params, callback) => {
    // if flight exists for this person, deletes all flights related to the group and uid and insert new flights
    dbMain.Flights.find({uid: params.uid, groupName: params.groupName}, (err, data) => {
      if (err) {
        callback(err, data)
      } else {
        if (data.length === 0) {
          // something wrong with this, only inserting one at a time
          dbMain.Flights.insertMany(params.flights, (err, data) => {
            if (err) {
              callback(err);
            } else {
              callback(null, data);
            }
          })
        } else {
          dbMain.Flights.deleteMany({uid: params.uid, groupName:params.groupName}, (err, data) => {
            if (err) {
              callback(err);
            } else {
              console.log(params.flights);
              dbMain.Flights.insertMany(params.flights, (err, data) => {
                if (err) {
                  callback(err);
                } else {
                  callback(null, data);
                }
              })
            }
          })
        }

      }
    })
  },

  readGroupFlights: (params, callback) => {
    dbMain.Flights.find({ groupName: params.groupName }, (err, docs) => {
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
