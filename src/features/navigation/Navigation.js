import React, {Component} from 'react';
import logoLight from '../../assets/images/logo-light.png';
import logo from '../../assets/images/logo.png';
import { withRouter } from 'react-router';

class Navigation extends Component {
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
                    {/* Logos */}
                    <div className="inner-header">
                        <a className="inner-brand" href="index.html">
                            <img className="brand-dark" src={logo} width="77px" alt="" />
                            <img className="brand-light" src={logoLight} width="77px" alt=""/>
                        </a>
                    </div>
                    {/* Navigation */}
                    <div className="inner-navigation collapse">
                        <div className="inner-navigation-inline">
                            <div className="inner-nav">
                                <ul>
                                    {/* Home */}
                                    <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <a href="#">Home</a>
                                        <div className="mega-menu">
                                            <ul className="sub-menu mega-menu-row">
                                                {/* Column 1 */}
                                                <li className="menu-item-has-children mega-menu-col">
                                                    <a href="#">Basic</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="index.html">Dark</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">Light</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Gradient</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-4.html">Slider</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-5.html">Text Rotator</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-6.html">Local Video</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* Column 2 */}
                                                <li className="menu-item-has-children mega-menu-col">
                                                    <a href="#">Video</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="index-7.html">Youtube Dark</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-8.html">Youtube Light</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-9.html">Youtube Gradient</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-10.html">Vimeo Dark</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-11.html">Vimeo Light</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-12.html">Vimeo Gradient</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* Column 3 */}
                                                <li className="menu-item-has-children mega-menu-col">
                                                    <a href="#">Small</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="index-13.html">Dark Small</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-14.html">Light Small</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-15.html">Gradient Small</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-16.html">Youtube Small</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-17.html">Vimeo Small</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* Home end */}
                                    {/* Pages */}
                                    <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <a href="#">Pages</a>
                                        <div className="mega-menu">
                                            <ul className="sub-menu mega-menu-row">
                                                {/* Column 1 */}
                                                <li className="menu-item-has-children mega-menu-col">
                                                    <a href="#">Basic</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="about.html">About Us 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="about-2.html">About Us 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="services.html">Services 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="services-2.html">Services 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="pricing-1.html">Pricing</a>
                                                        </li>
                                                        <li>
                                                            <a href="faq.html">FAQ</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* Column 2 */}
                                                <li className="menu-item-has-children mega-menu-col">
                                                    <a href="#">Secondary</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="contact-1.html">Contact</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact-2.html">Map Contact</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact-3.html">Image Contact</a>
                                                        </li>
                                                        <li>
                                                            <a href="nav-left.html">Left Nav</a>
                                                        </li>
                                                        <li>
                                                            <a href="index.html">Center Nav</a>
                                                        </li>
                                                        <li>
                                                            <a href="nav-right.html">Right Nav</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* Pages end */}
                                    {/* Portfolio */}
                                    <li className="menu-item-has-children">
                                        <a href="#">Portfolio</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="#">Grid</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="portfolio-grid-3-col.html">3 Columns</a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-grid-4-col.html">4 Columns</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Masonry</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="portfolio-masonry-3-col.html">3 Columns</a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-masonry-4-col.html">4 Columns</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Standard</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="portfolio-standard-3-col.html">3 Columns</a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-standard-4-col.html">4 Columns</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Single Work</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="portfolio-single-1.html">Small Images</a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-single-2.html">Small Slider</a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-single-3.html">Big Images</a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-single-4.html">Big Slider</a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-single-5.html">Gallery</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Portfolio end */}
                                    {/* Blog */}
                                    <li className="menu-item-has-children">
                                        <a href="#">Blog</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="blog.html">classNameic</a>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="about.html">Grid</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog-grid.html">2 Columns</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-2.html">3 Columns</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="services.html">Masonry</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog-masonry.html">2 Columns</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-masonry-2.html">3 Columns</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog-single.html">Single Post</a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Blog end */}
                                    {/* Mega menu */}
                                    <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <a href="#">Shortcodes</a>
                                        <div className="mega-menu">
                                            <ul className="sub-menu mega-menu-row">
                                                {/* Column 1 */}
                                                <li className="menu-item-has-children mega-menu-col">
                                                    <a href="#">Group 1</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="shortcodes-buttons.html">Buttons</a>
                                                        </li>
                                                        {/*#[i.fa.fa-diamond] Buttons */}
                                                        <li>
                                                            <a href="shortcodes-tabs.html">Tabbed Content</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-bars.html">Progress Bars</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-accordions.html">Accordions</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-alerts.html">Alerts</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-forms.html">Form Inputs</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-iconbox.html">Icon Boxes</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* Column 2 */}
                                                <li className="menu-item-has-children mega-menu-col">
                                                    <a href="#">Group 2</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="shortcodes-modals.html">Modals</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-modules.html">Parallax</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-pricing.html">Pricing Options</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-piechart.html">Pie charts</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-clients.html">Clients</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-sliders.html">Sliders</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-widgets.html">Widgets</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* Column 3 */}
                                                <li className="menu-item-has-children mega-menu-col">
                                                    <a href="#">Group 3</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="shortcodes-grid.html">Grid</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-typography.html">Typography</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-video.html">Video Players</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-video-backgrounds.html">Video Backgrounds</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-special-headings.html">Special Headings</a>
                                                        </li>
                                                        <li>
                                                            <a href="shortcodes-testimonials.html">Testimonials</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* Mega menu end */}
                                    {/* Simple */}
                                    <li>
                                        <a href="start.html">All Demos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Extra menu */}
                    <div className="extra-nav">
                        <ul>
                            <li>
                                <a className="open-offcanvas" href="#">
                                    <span>Menu</span>
                                    <span className="fa fa-bars"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile menu */}
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
