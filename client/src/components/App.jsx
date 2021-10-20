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
import GroupLandingPage from './Group/GroupLandingPage';


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
          this.checkUser(authState.currentUser);
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
      .catch((err) => console.log("failed", err));
  }

  checkUser(user) {
    axios
      .get("/checkUser", { params: { uid: user.uid } })
      .then((response) => {
        console.log(response.data, "user data");
        if (response.data.length === 0) {
          this.postUser(user);
          console.log("welcome, First Time User!");
        } else {
          console.log("Welcome Back!");
        }
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
            <GroupLandingPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;