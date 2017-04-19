import React, { Component } from 'react';
import logo from '../logo.svg';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LandingPage from '../features/landing-page/LandingPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={LandingPage} />
        </Router>
      </div>
    );
  }
}

export default App;
