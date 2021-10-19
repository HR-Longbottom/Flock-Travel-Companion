import Sidebar from '../Sidebar/Sidebar';
import React from 'react';
import {Link} from 'react-router-dom';
import Head from './Head.jsx';
import MyFlights from './MyFlights';


function Home() {
  return (
    <Link exact to='/home'>
      <div className="Home">
        <Head/>
        <Sidebar />
        <MyFlights />
      </div>
    </Link>
  );
}
export default Home;