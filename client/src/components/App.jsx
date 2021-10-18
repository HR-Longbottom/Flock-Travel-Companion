import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GroupLandingPage from './Group/GroupLandingPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <div>test</div> {/* <Login/> */}
          </Route>
          <Route path='/messages'>
          <div>test2</div> {/* <Messages/> */}
          </Route>
          <Route exact path='/home'>
          <div></div> {/* <Home/> */}
          </Route>
          <Route path='/plans'>
          <div></div> <GroupLandingPage />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;