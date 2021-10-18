import React from 'react';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>Flock.io</h1>
        <div className='signout'><button>Sign Out</button></div>
        <div className='searchBar'>
          <input></input>
        </div>

      </div>
    )
  }
}


export default LandingPage;