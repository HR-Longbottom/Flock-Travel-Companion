import Sidebar from '../Sidebar/Sidebar';
import React, { useState } from "react"
import {Link} from 'react-router-dom';
import Head from './Head.jsx';
import MyFlights from './MyFlights';
import GroupFlights from './GroupFlights';
import styled from 'styled-components';


const Styles = styled.div`

.Home {
  background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
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
  return (
    <Styles>
    <Link exact to='/home'> </Link>
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
}
export default Home;