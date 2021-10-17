import app from './firebase.js';
import { getMessaging, onMessage, getToken } from "firebase/messaging";

getToken(messaging, { vapidKey: process.env.CHAT_SERVER_KEY })
  .then((currentToken) => {
    if (currentToken) {
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });

const messaging = getMessaging();

