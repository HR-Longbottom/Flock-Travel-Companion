import Sidebar from '../Sidebar/Sidebar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <Link exact to='/home'>
      <div className="App">
        <Sidebar />
      </div>
    </Link>

  );
}

export default Home;