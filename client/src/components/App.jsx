import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginMain from "./Login/LoginMain.jsx";
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
    auth.onAuthStateChanged((authState) => {
      auth.languageCode = "it";
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
          <Route path="/messages">
            <div></div> {/* <Messages/> */}
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
