import React, { useState } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { useHistory, Redirect, withRouter } from "react-router-dom";

import signOut from "../Login/firebase-SignOut.js";
import { getAuth } from "firebase/auth";

import styled from "styled-components";
import "./Home.css";
import FlockIO from "../../../assets/FlockIO.png";

const Styles = styled.div`
  .head {
    color: black;
    height: 180px;
    position: relative;
    margin-bottom: 0;
  }

  .head-text {
    position: absolute;
    left: 50%;
  }

  .logo {
    position: absolute;
    top: 0;
    height: 200px;
    width: 200px;
  }

  .headWrap {
    opacity: 0.5;
    position: absolute;
    top: -50px;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const Head = () => {
  const history = useHistory();
  console.log('HEAD-LINE44: ', history)
  const handleOnSubmit = () => {
    signOut();
    history.push("/");
  };

  return (
    <>
      <Styles>
        <Jumbotron className="head">
          <div className="headWrap"></div>
          <img className="logo" src={FlockIO} />
          <Container className="head-text">
            <h1>Welcome</h1>
            <p>Where the Flock plan their trips</p>
            <button className="signOutBtn" onClick={() => signOut()}>
              Sign Out
            </button>
          </Container>
        </Jumbotron>
      </Styles>
    </>
  );
};

export default Head;
