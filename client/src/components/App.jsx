import React from 'react';
import { BroweserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <div></div> {/* <Login/> */}
          </Route>
          <Route path='/messages'>
          <div></div> {/* <Messages/> */}
          </Route>
          <Route exact path='/home'>
          <div></div> {/* <Home/> */}
          </Route>
          <Route path='/plans'>
          <div></div> {/* <GroupPage /> */}
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;