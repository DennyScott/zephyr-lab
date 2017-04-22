import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LandingPage from '../features/landing-page/LandingPage';
import Navigation from '../features/navigation/Navigation';
import Footer from '../features/footer/Footer';
import ScrollTop from '../features/footer/scroll-top';
import OffCanvas from '../features/off-canvas/Off-Canvas';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Router>
          <Route exact path="/" component={LandingPage} />
        </Router>
        <Footer />
        <ScrollTop />

        <OffCanvas />
      </div>
    );
  }
}

export default App;
