import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginMain from "./Login/LoginMain.jsx";
import ChatMain from "./Chat/ChatMain.jsx";
import Home from "./Home/Home.jsx";
import firebase from "../../../firebase-config.js";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
    };
    this.postUser = this.postUser.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  componentDidMount() {
    const auth = getAuth();
    auth.languageCode = "it";
    auth.onAuthStateChanged((authState) => {
      authState = auth;
      if (authState.currentUser !== null) {
        this.setState({ isLoggedIn: true }, () => {
          this.checkUser(authState.currentUser.uid);
          console.log("Logged In:", authState.currentUser);
        });
      } else {
        this.setState({ isLoggedIn: false }, () => {
          console.log("Logged Out: ", authState.currentUser);
        });
      }
    });
  }

  postUser(user) {
    axios
      .post("/createUser", user)
      .then((response) => console.log("success"))
      .catch((err) => console.log("app 32", err));
  }

  checkUser(userUID) {
    axios
      .get("/checkUser", {params: {uid: userUID}} )
      .then((response) => {
        console.log(response.data, "user exists")
      })
      .catch((err) => console.log(false, err));
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={(state) =>
            !this.state.isLoggedIn ? (
              <LoginMain {...state} />
            ) : (
              <Redirect
                to={{ pathname: "/home", state: { from: state.location } }}
              />
            )
          }
        />
        <Route
          exact
          path="/home"
          render={(state) =>
            this.state.isLoggedIn ? (
              <Home {...state} />
            ) : (
              <Redirect
                to={{ pathname: "/", state: { from: state.location } }}
              />
            )
          }
        />
        <Switch>
          <Route exact path="/messages">
            <ChatMain />
          </Route>
          <Route exact path="/plans">
            <div>Group Page</div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
