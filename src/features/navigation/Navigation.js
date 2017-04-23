import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logoLight from '../../assets/images/logo-light.png';
import logo from '../../assets/images/logo.png';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Navigation extends Component {

  static propTypes = {
    toggleSideMenu: PropTypes.func.isRequired,
  }

    constructor(props) {
      super(props);
      this.state = { isScrolled: false }
    }

    animateBar = () => {
      let { isScrolled } = this.state;
        if(window.scrollY > 0){
          if(isScrolled) return;

          this.setState({isScrolled: true});
        } else {
          if(!isScrolled) return;

          this.setState({isScrolled: false})
        }
    }

    componentDidMount() {
      window.addEventListener('scroll', this.animateBar);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.animateBar);
    }

    render() {
      let landingPage = this.props.location.pathname === '/' ? 'landing-page' : '';
        return (
            <header className={"header header-center header-light " + (this.state.isScrolled ? 'header-small header-shadow' : landingPage)}>
                <div className="container-fluid">
                    <div className="inner-header">
                        <Link className="inner-brand" to="/">
                            <img className="brand-dark" src={logo} width="77px" alt="" />
                            <img className="brand-light" src={logoLight} width="77px" alt=""/>
                        </Link>
                    </div>
                    <div className="inner-navigation collapse">
                        <div className="inner-navigation-inline">
                            <div className="inner-nav">
                                <ul>
                                    <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <Link to="/">Case Studies</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="/">Our Team</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="/">Services</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="extra-nav">
                        <ul>
                            <li>
                                <a className="open-offcanvas" href="#" onClick={() => {this.props.toggleSideMenu()}}>
                                    <span>Menu</span>
                                    <span className="fa fa-bars"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-toogle">
                        <a href="#" data-toggle="collapse" data-target=".inner-navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

const NavigationWithRoute = withRouter(Navigation);
export default NavigationWithRoute;
