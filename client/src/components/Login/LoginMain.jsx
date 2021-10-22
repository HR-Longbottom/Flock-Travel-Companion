import React from "react";
import "./LoginMain.css";

import { googleProvider } from "./authMethod.js";
import socialMediaAuth from "./firebase-SignIn.js";
import { getAuth } from "firebase/auth";

import Google from "../../../assets/google.png";
import FlockIO from "../../../assets/FlockIO.png";

function App() {
  const signInClick = async (provider) => {
    const res = await socialMediaAuth(provider);
  };

  return (
    <>
      <div id="loginApp">
        <img className="logoHome" src={FlockIO} />
        <div className="wrapper">
          <div
            className="g-sign-in-button"
            onClick={() => signInClick(googleProvider)}
          >
            <div className="content-wrapper">
              <div className="logo-wrapper">
                <img src={Google} alt="google-logo"></img>
              </div>
              <span className="text-container">
                <span>Sign in with Google</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
