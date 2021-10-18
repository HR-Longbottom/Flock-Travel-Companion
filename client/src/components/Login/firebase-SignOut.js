import app from "../../../../firebase-config.js";
import { getAuth, signOut } from "firebase/auth";

const signOutClick = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Logged Out");
    })
    .catch((error) => {
      console.log("Failed to Log Out: ", err);
    });
};
export default signOutClick;
