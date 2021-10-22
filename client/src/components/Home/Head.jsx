import React, { useState, useEffect} from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
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
    background-image: linear-gradient(135deg, transparent 0%, transparent 6%,rgba(71, 71, 71,0.04) 6%, rgba(71, 71, 71,0.04) 22%,transparent 22%, transparent 100%),linear-gradient(45deg, transparent 0%, transparent 20%,rgba(71, 71, 71,0.04) 20%, rgba(71, 71, 71,0.04) 47%,transparent 47%, transparent 100%),linear-gradient(135deg, transparent 0%, transparent 24%,rgba(71, 71, 71,0.04) 24%, rgba(71, 71, 71,0.04) 62%,transparent 62%, transparent 100%),linear-gradient(45deg, transparent 0%, transparent 73%,rgba(71, 71, 71,0.04) 73%, rgba(71, 71, 71,0.04) 75%,transparent 75%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  }

  .updateAirportBtn {
    position: relative;
    top: -290px;
    left: 42%;
    background-color: #99B898;
    border-color: black;
  }
`;

const Head = (props) => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  console.log('HEAD-LINE44: ', history)
  const handleOnSubmit = () => {
    signOut();
    history.push("/");
  };

  const handleShow = () => setShow(!show);


  return (
    <Styles>
      <Jumbotron className="head">
        <div className="headWrap"></div>
        <img className="logo" src={FlockIO} />
        <Container className="head-text">
          {show ? <LocationModal currentUser={props.currentUser} /> : <></>}
          <div className='welcomeAndP'>
            <h1>Welcome</h1>
            <p>Where Your Flock Plans A Great Migration</p>
          </div>
          <button className="signOutBtn" onClick={() => signOut()}>
            Sign Out
          </button>
          <Button className="updateAirportBtn" variant="primary" onClick={handleShow}>
            Update Preferred Airport
          </Button>
        </Container>
      </Jumbotron>
    </Styles>
  );
};

export default Head;
