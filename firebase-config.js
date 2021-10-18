import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = ({
  apiKey: process.env.FB_APP_API_KEY,
  authDomain: process.env.FB_APP_AUTHDOMAIN,
  projectId: process.env.FB_APP_PROJECT_ID,
  storageBucket: process.env.FB_APP_STORAGEBUCKET,
  messagingSenderId: process.env.FB_APP_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_APP_ID,
  measurementId: process.env.FB_APP_MEASUREMENT_ID,
});

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default firebaseConfig;