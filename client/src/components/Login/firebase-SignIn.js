import firebase from "../../../../firebase-config.js";

import {
  getAuth,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const socialMediaAuth = (provider) => {
  const auth = getAuth();
  auth.languageCode = "it";
  provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      return err;
    });
};

export default socialMediaAuth;
