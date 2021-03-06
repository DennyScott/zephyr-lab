import React, { Component } from "react";
import PropTypes from "prop-types";
import logoLight from "../../assets/images/logo-light.png";
import logo from "../../assets/images/logo.png";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

class Navigation extends Component {
  static propTypes = {
    toggleSideMenu: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  animateBar = () => {
    let { isScrolled } = this.state;
    if (window.scrollY > 0) {
      if (isScrolled) return;

      this.setState({ isScrolled: true });
    } else {
      if (!isScrolled) return;

      this.setState({ isScrolled: false });
    }
  };

  scrollTo = name => {
    setTimeout(() => {
      scroller.scrollTo(name, { duration: 700, offset: -100, smooth: true });
    }, 100);
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.animateBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.animateBar);
  }

  render() {
    let landingPage =
      this.props.location.pathname === "/" ? "landing-page" : "";
    return (
      <header
        className={
          "header header-center header-light " +
          (this.state.isScrolled ? "header-small header-shadow" : landingPage)
        }
      >
        <div className="container-fluid">
          <div className="inner-header">
            <Link
              className="inner-brand"
              to="/"
              onClick={() => {
                this.scrollToTop();
              }}
            >
              <span className="brand-dark">Denny Scott</span>
              <span className="brand-light">Denny Scott</span>
            </Link>
          </div>
          <div className="inner-navigation collapse">
            <div className="inner-navigation-inline">
              <div className="inner-nav">
                <ul>
                  <li className="menu-item-has-children menu-item-has-mega-menu">
                    <Link
                      to="/"
                      onClick={() => {
                        this.scrollToTop();
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="menu-item-has-children menu-item-has-mega-menu">
                    <Link
                      to="/"
                      onClick={() => {
                        this.scrollTo("portfolio");
                      }}
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link
                      to="/"
                      onClick={() => {
                        this.scrollTo("team");
                      }}
                    >
                      Past Experience
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link
                      to="/"
                      onClick={() => {
                        this.scrollTo("services");
                      }}
                    >
                      General Skills
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link
                      to="/blog"
                      onClick={() => {
                        this.scrollToTop();
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const NavigationWithRoute = withRouter(Navigation);
export default NavigationWithRoute;
