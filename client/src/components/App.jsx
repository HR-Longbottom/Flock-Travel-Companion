import React from "react";
import axios from "axios";
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
import GroupLandingPage from './Group/GroupLandingPage';
import LocationModal from "./Home/LocationModal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
      currentUser: {email: null, displayName: null, uid: null, location: null}
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
    console.log('USER', user)
    axios
      .get("/checkUser", { params: { uid: user.uid } })
      .then((response) => {

        if (response.data.length === 0) {
          this.postUser(user);
          this.setState({currentUser: {email: user.email, displayName: user.displayName, uid: user.uid, location: undefined}})
          console.log("welcome, First Time User!");
        } else {
          var userOne = response.data[0];
          console.log(response.data.location)
          this.setState({currentUser: {email: userOne.email, displayName: userOne.name, uid: userOne.uid, location: userOne.location}})
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
              // <LoginMain {...state} />
              <LoginMain />
            ) : (
              <Redirect
                // to={{ pathname: "/home", state: { from: state.location } }}
                to="/home"
              />
            )
          }
        />
        <Route
          exact
          path="/home"
          render={(state) =>
            this.state.isLoggedIn ? (
              // <Home {...state} />
              <Home {...state} currentUser={this.state.currentUser}/>
            ) : (
              <Redirect
                // to={{ pathname: "/", state: { from: state.location } }}
                to="/"
              />
            )
          }
          type="private"
        />
        <Switch>
          <Route exact path="/messages" type="private">
            <ChatMain />
          </Route>
          <Route exact path="/plans">
          <GroupLandingPage currentUser={this.state.currentUser} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
