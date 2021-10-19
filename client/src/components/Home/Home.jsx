import Sidebar from '../Sidebar/Sidebar';
import React from 'react';
import {Link} from 'react-router-dom';
import Head from './Head.jsx';
import MyFlights from './MyFlights';
import GroupFlights from './GroupFlights';
import styled from 'styled-components';

const Styles = styled.div`
.Home {
  max-height: 1100px;
}
.myFlights {
  position: relative;
  top: -900px;
  height: 300px;

  float: none;
  margin: 0 auto;
  text-align: center;

}
.groupFlights {
  position: relative;
  top: -800px;
  height: 300px;
  float: none;
  margin: 0 auto;
  text-align: center;
}`
const Home = () => {
  return (
    <Styles>
    <Link exact to='/home'> </Link>
      <div className="Home" >
        <Head/>
        <Sidebar />
        <div className='myFlights'>
        <MyFlights />
        </div>
        <div className='groupFlights' >
        <GroupFlights />
        </div>
      </div>

    </Styles>

  );
}
export default Home;