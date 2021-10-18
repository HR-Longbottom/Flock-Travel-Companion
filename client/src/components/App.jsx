import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home.jsx'

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
          <div></div> {/* <Messages/> */}
          </Route>
          <Route exact path='/home'>
          <Home/>
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