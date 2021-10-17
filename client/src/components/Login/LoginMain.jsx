import React from 'react';
import "./LoginMain.css";
import signInWithRedirect from "./FbSignIn.js"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
    <div className="wrapper">
      <div className="signIn">
      <button className="signInBtn" onClick={signInWithRedirect}>
        <FontAwesomeIcon icon={faGoogle} id="google" /> Sign in with Google
       </button>
      </div>
      </div>
    </>
  );
}

export default App;
