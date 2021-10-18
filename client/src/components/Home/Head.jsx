import React from "react";
import {Jumbotron, Container} from 'react-bootstrap';
import styled from "styled-components";
import FlockIO from '../../../assets/FlockIO.png'
const Styles = styled.div`
  .head {
    color: black;
    height: 180px;
    position: relative;
    margin-bottom: 0;
  }

  .head-text {
    position: relative;
    text-align: center;
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
  }`;

  const Head = () => {
    return (
    <Styles>
     <Jumbotron className='head'>
      <div className='headWrap'></div>
      <img className='logo' src={FlockIO}/>
       <Container className="head-text">
         <h1>Welcome</h1>
         <p>Where the Flock plan their trips</p>
       </Container>

     </Jumbotron>
     </Styles>
  )}

  export default Head;