import app from '../../../../firebase.js'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth)
  .then(() => {
    console.log("Logged Out");
  })
  .catch((error) => {
    console.log("Failed to Log Out: ", err);
  });
