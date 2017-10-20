import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'

import LandingPage from '../features/landing-page/LandingPage';
import Navigation from '../features/navigation/Navigation';
import Footer from '../features/footer/Footer';
import ScrollTop from '../features/footer/scroll-top';
import OffCanvas from '../features/off-canvas/Off-Canvas';
import Blog from '../features/blog/blog';
import BlogPost from '../features/blog-post/Blog-post';
import Portfolio from '../features/portfolio/Portfolio';

const history = createHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            displaySideMenu: false
        };
        this.fadeIn = {
            opacity: this.state.opacity
        };
        ReactGA.initialize('UA-99056945-1');
    }

    componentDidMount() {
      if(!window.location.href.includes('localhost:3000')) {
        ReactGA.set({page: window.location.pathname});
        ReactGA.pageview(window.location.pathname);
      }

        setTimeout(() => {
            this.fadeIn = {
                opacity: 1
            };
            this.setState(this.fadeIn);
        }, 1);
    }


    render() {
        return (
            <div className="App">
                <div className={"layout " + (this.state.displaySideMenu
                    ? 'off-canvas-sidebar-open'
                    : '')} style={this.fadeIn}>
                    <Router history={history}>
                        <div>
                            <Navigation toggleSideMenu={this.toggleSideMenu}/>
                            <Route exact path="/" component={LandingPage}/>
                            <Route exact path="/blog" component={Blog}/>
                            <Route path="/blog/:id" component={BlogPost}/>
                            <Route path="/portfolio/:id" component={Portfolio} />
                        </div>
                    </Router>
                    <Footer/>
                    <ScrollTop/>
                </div>
            </div>
        );
    }
}

export default App;
