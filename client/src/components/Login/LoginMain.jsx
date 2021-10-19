import React from "react";
import "./LoginMain.css";

import { googleProvider } from "./authMethod.js";
import socialMediaAuth from "./firebase-SignIn.js";
import { getAuth } from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function App() {
  const signInClick = async (provider) => {
    const res = await socialMediaAuth(provider);
  };

  return (
    <>
      <div className="wrapper">
        <div className="signIn">
          <button
            className="signInBtn"
            onClick={() => signInClick(googleProvider)}
          >
            {/* <FontAwesomeIcon icon={faGoogle} id="google" /> */}
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
