import React, { useRef, useState } from "react";
import firebase from "../../../../firebase-config.js";
import { googleProvider } from "../Login/authMethod.js";
import socialMediaAuth from "../Login/firebase-SignIn.js";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./ChatMain.css";
import axios from "axios";

function App() {
  const ref = useRef();
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [formValue, setFormValue] = useState("");
  const messages = [];
  const messageRef = [];
  function getChats() {
    axios
      .get("/messageData")
      .then((data) => {
        messages.push(data);
      })
      .catch((err) => {
        throw err;
      });
  }
  getChats();

  const sendMessage = (e) => {
    e.preventDefault();
    let date = new Date();
    const { uid } = user;

    axios
      .post("/messageData", {
        uid,
        text: formValue,
        createdAt: `${date.toLocaleDateString()}, ${date
          .toLocaleTimeString()
          .replace(/:\d\d /, " ")}`,
      })
      .then((data) => {
        getChats();
        console.log('Messages: ', messages);
      })
      .catch((err) => {
        throw err;
      });

    setFormValue("");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="chatWrapper">
        <div className="chatHeader">
          {/* <FontAwesomeIcon icon={faCircle} id="active" /> */}
          Test User
        </div>
        <main>
          {messages &&
            messages.map((msg) => <Message key={msg._id} message={msg} />)}
          <span ref={ref}></span>
        </main>
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Say Hello!"
          />
          <button id="sendChatBtn" type="submit" disabled={!formValue}>
            Send
          </button>
        </form>
      </div>
    </>
  );
}

function Message(props) {
  const { text, uid } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
