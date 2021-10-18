import Sidebar from '../Sidebar/Sidebar';
import React from 'react';
import {Link} from 'react-router-dom';
import Head from './Head.jsx';
import MyFlights from './MyFlights';
import GroupFlights from './GroupFlights';


const Home = () => {
  return (
    <Link exact to='/home'>
      <div className="Home" >
        <Head/>
        <Sidebar />
        <MyFlights />
        {/* <GroupFlights /> */}
      </div>
    </Link>

  );
}
export default Home;