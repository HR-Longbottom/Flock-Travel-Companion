import Sidebar from '../Sidebar/Sidebar';
import React from 'react';
import {Link} from 'react-router-dom';
import Head from './Head.jsx';


const Home = () => {
  return (
    <Link exact to='/home'>
      <div className="Home">
        <Head/>
        <Sidebar />
      </div>
    </Link>

  );
}
//
export default Home;