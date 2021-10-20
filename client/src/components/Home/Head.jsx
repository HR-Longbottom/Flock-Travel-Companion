import React, { useState } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { useHistory, Redirect, withRouter } from "react-router-dom";

import signOut from "../Login/firebase-SignOut.js";
import { getAuth } from "firebase/auth";

import styled from "styled-components";
import "./Home.css";
import FlockIO from "../../../assets/FlockIO.png";
import LocationModal from './LocationModal.jsx';

const Styles = styled.div`
  .head {
    color: #343a40;
    height: 180px;
    position: relative;
    margin-bottom: 0;
  }

  .head-text {
    position: relative;
    text-align: center;
    color: #343a40;
  }

  .welcomeAndP {
    position: relative;
    color: #343a40;
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
  .btn-primary {
    border-radius: 5px;
    position: relative;
    top: -310px;
    left: 51%;
    border: 1px solid rgb(0 0 0 / 90%);
    /* margin-top: 20%; */
    margin-left: 10px;
    width: 15%;
    height: 30%;
    background-color: rgb(54 192 208);
    color: black;
  }
`;

const Head = (props) => {
  const history = useHistory();
  console.log('HEAD-LINE44: ', history)
  const handleOnSubmit = () => {
    signOut();
    history.push("/");
  };

  return (
      <Styles>
        <Jumbotron className="head">
          <div className="headWrap"></div>
          <img className="logo" src={FlockIO} />
          <Container className="head-text">
            <div className='welcomeAndP'>
            <h1>Welcome</h1>
            <p>Where the Flock plan their trips</p>
            </div>
            <button className="signOutBtn" onClick={() => signOut()}>
              Sign Out
            </button>
            <LocationModal currentUser={props.currentUser}/>
          </Container>
        </Jumbotron>
      </Styles>
  );
};

export default Head;
