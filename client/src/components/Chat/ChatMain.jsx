import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import app from "../../../../firebase-config.js";
import { googleProvider } from "../Login/authMethod.js";
import socialMediaAuth from "../Login/firebase-SignIn.js";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import ChatHeads from "./ChatHeads.jsx";
import Chatbox from "./Chatbox.jsx";

import "./ChatMain.css";
import FlockIO from "../../../assets/FlockIO.png";

const messaging = getMessaging(app);

function getChatToken(setTokenFound) {
  getToken(messaging, { vapidKey: process.env.CHAT_SERVER_KEY })
    .then((currentToken) => {
      if (currentToken) {
        setTokenFound(true);
        // console.log("Current Token: ", currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
  // navigator.serviceWorker.addEventListener("message", (message) =>
  //   console.log(message)
  // );
}

// onMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

function App() {
  const ref = useRef();
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const [formValue, setFormValue] = useState("");
  const [msgValue, setMsgValue] = useState([]);

  const [isTokenFound, setTokenFound] = useState(false);

  const [chatHeads, setChatHeads] = useState([]);
  const [allGroups, setAllGroups] = useState([]);
  const [personalGroups, setPersonalGroups] = useState([]);
  const [conversationId, setConversationId] = useState(null);

  const [receiver, setReceiver] = useState(null);

  getChatToken(setTokenFound);

  function useInterval(cb, count) {
    const savedCb = useRef();
    useEffect(() => {
      savedCb.current = cb;
    }, [cb])

    useEffect(() => {
      function ticker() {
        savedCb.current();
      }
      if (count !== null) {
        let id = setInterval(ticker, count);
        return () => clearInterval(id);
      }
    }, [count])
  }

  function getChatHeads() {
    return axios
      .get("/viewAllGroups")
      .then((allGroups) => {
        return allGroups.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  function getChats() {
    // if (input !== null) {
      // setReceiver(input);
      axios
        .get("/messageData")
        .then((messages) => {
          let msgs = [];
          if (receiver) {
          messages.data.forEach((x) => {
            if (x.group === receiver._id) {
              msgs.push(x);
            }
          });
          setMsgValue(msgs);
          }
        })
        .catch((err) => {
          throw err;
        });
    // }
  }

  // useEffect(() => {
    useInterval(() => {
      getChats()
    }, 1000)
  // }, [receiver])

  useEffect(() => {
    getChats();
    (async () => {
      var heads = await getChatHeads();
      setPersonalGroups(
        heads
          .map((groupObj) => groupObj)
          .filter((groupObj) =>{
            return !groupObj.members.includes(user); // inverted until members are reflected accurately
      })
      );
    })();
  }, [receiver]);

  const sendMessage = (e) => {
    e.preventDefault();
    let date = new Date();
    const { uid } = user;
    axios
      .post("/messageData", {
        name: user.displayName,
        uid,
        text: formValue,
        createdAt: `${date.toLocaleDateString()}, ${date
          .toLocaleTimeString()
          .replace(/:\d\d /, " ")}`,
        group: receiver._id,
      })
      .then(() => {
        getChats();
      })
      .catch((err) => {
        throw err;
      });

    setFormValue("");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   if (messageEl) {
  //     messageEl.current.addEventListener('DOMNodeInserted', event => {
  //       const { currentTarget: target } = event;
  //       target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
  //     });
  //   }
  // }, [])

  return (
    <>
    <div id="chatApp" className='d-flex flex-column'>
      <div className='app-logo-header'>
    <Link to="/home">
        <div className="chatToHome"><img className="logoChat" src={FlockIO} /></div>
      </Link>
      </div>
      <div className="chat-screen d-flex flex-row">
        {personalGroups && (
          <div className="chat-head">
            <ChatHeads
              yourGroups={personalGroups}
              setReceiver={setReceiver}
              getChats={getChats}
              user
            />
          </div>
        )}
        <div className="chatWrapper">
          <div className="chatHeader">
            {/* <FontAwesomeIcon icon={faCircle} id="active" /> */}
            <Chatbox
              receiver={receiver}
              user={user}
              conversationId={conversationId}
              setConversationId={setConversationId}
            />
          </div>
          <main className="chatMain">
            {msgValue &&
              msgValue.map((msg) => (
                <Message
                  key={msg._id}
                  message={msg}
                  auth={auth}
                  type="message"
                />
              ))}
            <span ref={ref}></span>
          </main>
          <form className="chatForm" onSubmit={sendMessage}>
            <input
              className="chatInput"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Say Hello!"
            />
            <button id="sendChatBtn" type="submit" disabled={!formValue}>
              Send
            </button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

function Message(props) {
  const messageClass =
    props.auth.currentUser.uid === props.message.uid ? "sent" : "received";
  return (
    <>
      <div className={messageClass}>
        <p className="userTexts">
          {`${props.message.name}: ${props.message.text}`} <br />{" "}
          {props.message.createdAt}
        </p>
      </div>
    </>
  );
}

export default App;
