import Sidebar from '../Sidebar/Sidebar';
import React, { useState } from "react"
import {Link} from 'react-router-dom';
import Head from './Head.jsx';
import MyFlights from './MyFlights';
import GroupFlights from './GroupFlights';
import styled from 'styled-components';

// background: rgb(34,193,195);
//background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
const Styles = styled.div`

.Home {
  background-image: radial-gradient(circle at 69% 86%, rgba(165, 165, 165,0.06) 0%, rgba(165, 165, 165,0.06) 25%,rgba(193, 193, 193,0.06) 25%, rgba(193, 193, 193,0.06) 50%,rgba(221, 221, 221,0.06) 50%, rgba(221, 221, 221,0.06) 75%,rgba(249, 249, 249,0.06) 75%, rgba(249, 249, 249,0.06) 100%),radial-gradient(circle at 49% 76%, rgba(129, 129, 129,0.06) 0%, rgba(129, 129, 129,0.06) 25%,rgba(164, 164, 164,0.06) 25%, rgba(164, 164, 164,0.06) 50%,rgba(200, 200, 200,0.06) 50%, rgba(200, 200, 200,0.06) 75%,rgba(235, 235, 235,0.06) 75%, rgba(235, 235, 235,0.06) 100%),radial-gradient(circle at 22% 64%, rgba(173, 173, 173,0.06) 0%, rgba(173, 173, 173,0.06) 25%,rgba(119, 119, 119,0.06) 25%, rgba(119, 119, 119,0.06) 50%,rgba(64, 64, 64,0.06) 50%, rgba(64, 64, 64,0.06) 75%,rgba(10, 10, 10,0.06) 75%, rgba(10, 10, 10,0.06) 100%),linear-gradient(307deg, rgb(255,255,255),rgb(255,255,255));
  min-height: 1000px;
  max-height: 1080px;
}
.myFlights {
  position: relative;
  top: -850px;
  height: 100%;

  float: none;
  margin: 0 auto;
  text-align: center;

}
.groupFlights {
  position: relative;
  top: -750px;
  float: none;
  margin: 0 auto;
  text-align: center;
}`
const Home = (props) => {
  if (props.currentUser.email !== null) {

    return (
      <Styles>
    <Link to='/home'> </Link>
      <div className="Home" >
        <Head currentUser={props.currentUser}/>
        <Sidebar currentUser={props.currentUser}  />
        <div className='myFlights'>
        <MyFlights currentUser={props.currentUser} />
        </div>
        <div className='groupFlights' >
        <GroupFlights currentUser={props.currentUser}/>
        </div>
      </div>

    </Styles>
  );
    } else {
      return (<div></div>)
    }
}
export default Home;