import app from '../../../../firebase.js'
import { getAuth, getRedirectResult, signInWithRedirect,GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';

getRedirectResult()
.then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
});

const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
signInWithRedirect(auth);

export default signInWithRedirect;

