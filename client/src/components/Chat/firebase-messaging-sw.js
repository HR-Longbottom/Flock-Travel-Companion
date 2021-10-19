<<<<<<< HEAD:firebase-messaging-sw.js
import { initializeApp } from "firebase/app";
=======
import firebase from "../../../../firebase-config.js";
>>>>>>> mastertest:client/src/components/Chat/firebase-messaging-sw.js
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const dotenv = require("dotenv");
dotenv.config();

const firebaseApp = initializeApp({
  apiKey: process.env.FB_APP_API_KEY,
  authDomain: process.env.FB_APP_AUTHDOMAIN,
  projectId: process.env.FB_APP_PROJECT_ID,
  storageBucket: process.env.FB_APP_STORAGEBUCKET,
  messagingSenderId: process.env.FB_APP_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_APP_ID,
  measurementId: process.env.FB_APP_MEASUREMENT_ID,
});

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
const analytics = getAnalytics(firebaseApp);
