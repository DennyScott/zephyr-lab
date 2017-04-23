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
import Blog from '../features/blog/blog';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { opacity: 0 };
    this.fadeIn = { opacity: this.state.opacity };
  }

  componentDidMount() {
    setTimeout(() => {
      this.fadeIn = { opacity: 1 };
      this.setState({ opacity: 1});
    }, 1);
  }

  render() {
    return (
      <div className="App">
        <div className="layout" style={this.fadeIn}>
        <Router>
          <div>
            <Navigation />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/blog" component={Blog} />
          </div>
        </Router>
        <Footer />
        <ScrollTop />

        <OffCanvas />
        </div>
      </div>
    );
  }
}

export default App;
