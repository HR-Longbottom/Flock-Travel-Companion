import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
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

const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const analytics = getAnalytics(firebaseApp);
