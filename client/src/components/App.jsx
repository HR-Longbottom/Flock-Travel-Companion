import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginMain from "./Login/LoginMain.jsx";
import ChatMain from "./Chat/ChatMain.jsx";
import firebase from "../../../firebase-config.js";
import { onAuthStateChanged, getAuth } from "firebase/auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
    };
  }

  componentDidMount() {
    const auth = getAuth();
    auth.languageCode = "it";
    auth.onAuthStateChanged((authState) => {
      authState = auth;
      if (authState) {
        console.log(authState.currentUser);
        this.setState({ isLoggedIn: true });
      } else {
        console.log(authState.currentUser);
        this.setState({ isLoggedIn: false });
      }
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginMain />
          </Route>
          <Route exact path="/messages">
            <ChatMain />
          </Route>
          <Route exact path="/home">
            <div></div>
          </Route>
          <Route path="/plans">
            <div></div> {/* <GroupPage /> */}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
