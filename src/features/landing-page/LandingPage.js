import React, { Component } from 'react';
import { connect } from 'react-redux';
import {custom, onLoad, wow} from '../../assets/js/custom';

let wowData = wow();

class LandingPage extends Component {
  componentDidMount() {
    onLoad();
    custom();
    wowData.init();
    wowData.sync();
  }

  componentDidUpdate() {
    wowData.sync();
  }

  render() {
    return (
      <div>
  		<div className="layout">

  			{/* Header */}
  			<header className="header header-center">
  				<div className="container-fluid">
  					{/* Logos */}
  					<div className="inner-header"><a className="inner-brand" href="index.html"><img className="brand-dark" src="assets/images/logo.png" width="77px" alt="" /><img className="brand-light" src="assets/images/logo-light.png" width="77px" alt="" /></a></div>
  					{/* Navigation */}
  					<div className="inner-navigation collapse">
  						<div className="inner-navigation-inline">
  							<div className="inner-nav">
  								<ul>
  									{/* Home */}
  									<li className="menu-item-has-children menu-item-has-mega-menu"><a href="#">Home</a>
  										<div className="mega-menu">
  											<ul className="sub-menu mega-menu-row">
  												{/* Column 1 */}
  												<li className="menu-item-has-children mega-menu-col"><a href="#">Basic</a>
  													<ul className="sub-menu">
  														<li><a href="index.html">Dark</a></li>
  														<li><a href="index-2.html">Light</a></li>
  														<li><a href="index-3.html">Gradient</a></li>
  														<li><a href="index-4.html">Slider</a></li>
  														<li><a href="index-5.html">Text Rotator</a></li>
  														<li><a href="index-6.html">Local Video</a></li>
  													</ul>
  												</li>
  												{/* Column 2 */}
  												<li className="menu-item-has-children mega-menu-col"><a href="#">Video</a>
  													<ul className="sub-menu">
  														<li><a href="index-7.html">Youtube Dark</a></li>
  														<li><a href="index-8.html">Youtube Light</a></li>
  														<li><a href="index-9.html">Youtube Gradient</a></li>
  														<li><a href="index-10.html">Vimeo Dark</a></li>
  														<li><a href="index-11.html">Vimeo Light</a></li>
  														<li><a href="index-12.html">Vimeo Gradient</a></li>
  													</ul>
  												</li>
  												{/* Column 3 */}
  												<li className="menu-item-has-children mega-menu-col"><a href="#">Small</a>
  													<ul className="sub-menu">
  														<li><a href="index-13.html">Dark Small</a></li>
  														<li><a href="index-14.html">Light Small</a></li>
  														<li><a href="index-15.html">Gradient Small</a></li>
  														<li><a href="index-16.html">Youtube Small</a></li>
  														<li><a href="index-17.html">Vimeo Small</a></li>
  													</ul>
  												</li>
  											</ul>
  										</div>
  									</li>
  									{/* Home end */}
  									{/* Pages */}
  									<li className="menu-item-has-children menu-item-has-mega-menu"><a href="#">Pages</a>
  										<div className="mega-menu">
  											<ul className="sub-menu mega-menu-row">
  												{/* Column 1 */}
  												<li className="menu-item-has-children mega-menu-col"><a href="#">Basic</a>
  													<ul className="sub-menu">
  														<li><a href="about.html">About Us 1</a></li>
  														<li><a href="about-2.html">About Us 2</a></li>
  														<li><a href="services.html">Services 1</a></li>
  														<li><a href="services-2.html">Services 2</a></li>
  														<li><a href="pricing-1.html">Pricing</a></li>
  														<li><a href="faq.html">FAQ</a></li>
  													</ul>
  												</li>
  												{/* Column 2 */}
  												<li className="menu-item-has-children mega-menu-col"><a href="#">Secondary</a>
  													<ul className="sub-menu">
  														<li><a href="contact-1.html">Contact</a></li>
  														<li><a href="contact-2.html">Map Contact</a></li>
  														<li><a href="contact-3.html">Image Contact</a></li>
  														<li><a href="nav-left.html">Left Nav</a></li>
  														<li><a href="index.html">Center Nav</a></li>
  														<li><a href="nav-right.html">Right Nav</a></li>
  													</ul>
  												</li>
  											</ul>
  										</div>
  									</li>
  									{/* Pages end */}
  									{/* Portfolio */}
  									<li className="menu-item-has-children"><a href="#">Portfolio</a>
  										<ul className="sub-menu">
  											<li className="menu-item-has-children"><a href="#">Grid</a>
  												<ul className="sub-menu">
  													<li><a href="portfolio-grid-3-col.html">3 Columns</a></li>
  													<li><a href="portfolio-grid-4-col.html">4 Columns</a></li>
  												</ul>
  											</li>
  											<li className="menu-item-has-children"><a href="#">Masonry</a>
  												<ul className="sub-menu">
  													<li><a href="portfolio-masonry-3-col.html">3 Columns</a></li>
  													<li><a href="portfolio-masonry-4-col.html">4 Columns</a></li>
  												</ul>
  											</li>
  											<li className="menu-item-has-children"><a href="#">Standard</a>
  												<ul className="sub-menu">
  													<li><a href="portfolio-standard-3-col.html">3 Columns</a></li>
  													<li><a href="portfolio-standard-4-col.html">4 Columns</a></li>
  												</ul>
  											</li>
  											<li className="menu-item-has-children"><a href="#">Single Work</a>
  												<ul className="sub-menu">
  													<li><a href="portfolio-single-1.html">Small Images</a></li>
  													<li><a href="portfolio-single-2.html">Small Slider</a></li>
  													<li><a href="portfolio-single-3.html">Big Images</a></li>
  													<li><a href="portfolio-single-4.html">Big Slider</a></li>
  													<li><a href="portfolio-single-5.html">Gallery</a></li>
  												</ul>
  											</li>
  										</ul>
  									</li>
  									{/* Portfolio end */}
  									{/* Blog */}
  									<li className="menu-item-has-children"><a href="#">Blog</a>
  										<ul className="sub-menu">
  											<li><a href="blog.html">classNameic</a></li>
  											<li className="menu-item-has-children"><a href="about.html">Grid</a>
  												<ul className="sub-menu">
  													<li><a href="blog-grid.html">2 Columns</a></li>
  													<li><a href="blog-grid-2.html">3 Columns</a></li>
  												</ul>
  											</li>
  											<li className="menu-item-has-children"><a href="services.html">Masonry</a>
  												<ul className="sub-menu">
  													<li><a href="blog-masonry.html">2 Columns</a></li>
  													<li><a href="blog-masonry-2.html">3 Columns</a></li>
  												</ul>
  											</li>
  											<li><a href="blog-single.html">Single Post</a></li>
  										</ul>
  									</li>
  									{/* Blog end */}
  									{/* Mega menu */}
  									<li className="menu-item-has-children menu-item-has-mega-menu"><a href="#">Shortcodes</a>
  										<div className="mega-menu">
  											<ul className="sub-menu mega-menu-row">
  												{/* Column 1 */}
  												<li className="menu-item-has-children mega-menu-col"><a href="#">Group 1</a>
  													<ul className="sub-menu">
  														<li><a href="shortcodes-buttons.html">Buttons</a></li>
  														{/*#[i.fa.fa-diamond] Buttons */}
  														<li><a href="shortcodes-tabs.html">Tabbed Content</a></li>
  														<li><a href="shortcodes-bars.html">Progress Bars</a></li>
  														<li><a href="shortcodes-accordions.html">Accordions</a></li>
  														<li><a href="shortcodes-alerts.html">Alerts</a></li>
  														<li><a href="shortcodes-forms.html">Form Inputs</a></li>
  														<li><a href="shortcodes-iconbox.html">Icon Boxes</a></li>
  													</ul>
  												</li>
  												{/* Column 2 */}
  												<li className="menu-item-has-children mega-menu-col"><a href="#">Group 2</a>
  													<ul className="sub-menu">
  														<li><a href="shortcodes-modals.html">Modals</a></li>
  														<li><a href="shortcodes-modules.html">Parallax</a></li>
  														<li><a href="shortcodes-pricing.html">Pricing Options</a></li>
  														<li><a href="shortcodes-piechart.html">Pie charts</a></li>
  														<li><a href="shortcodes-clients.html">Clients</a></li>
  														<li><a href="shortcodes-sliders.html">Sliders</a></li>
  														<li><a href="shortcodes-widgets.html">Widgets</a></li>
  													</ul>
  												</li>
  												{/* Column 3 */}
  												<li className="menu-item-has-children mega-menu-col"><a href="#">Group 3</a>
  													<ul className="sub-menu">
  														<li><a href="shortcodes-grid.html">Grid</a></li>
  														<li><a href="shortcodes-typography.html">Typography</a></li>
  														<li><a href="shortcodes-video.html">Video Players</a></li>
  														<li><a href="shortcodes-video-backgrounds.html">Video Backgrounds</a></li>
  														<li><a href="shortcodes-special-headings.html">Special Headings</a></li>
  														<li><a href="shortcodes-testimonials.html">Testimonials</a></li>
  													</ul>
  												</li>
  											</ul>
  										</div>
  									</li>
  									{/* Mega menu end */}
  									{/* Simple */}
  									<li><a href="start.html">All Demos</a></li>
  								</ul>
  							</div>
  						</div>
  					</div>
  					{/* Extra menu */}
  					<div className="extra-nav">
  						<ul>
  							<li><a className="open-offcanvas" href="#"><span>Menu</span><span className="fa fa-bars"></span></a></li>
  						</ul>
  					</div>
  					{/* Mobile menu */}
  					<div className="nav-toogle"><a href="#" data-toggle="collapse" data-target=".inner-navigation"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></a></div>
  				</div>
  			</header>
  			{/* Header end */}

  			{/* Wrapper */}
  			<div className="wrapper">

  				{/* Page Header */}
  				<section className="module-header full-height parallax bg-dark bg-dark-90" data-background="assets/images/module-1.jpg" data-jarallax-video="https://www.youtube.com/watch?v=0aCbYxJ9gus">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-12">
  								<h1 className="h6 m-b-20">THINK. DEFINE. DESIGN.</h1>
  								<h1 className="h1 m-b-20">We Are Business</h1>
  								<p className="m-b-40">Start with co-working way in our studio.</p>
  								<p><a className="btn btn-lg btn-circle btn-brand" href="#">Let’s get started!</a></p>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Page Header end */}

  				{/* Services */}
  				<section className="module">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-3">
  								<div className="icon-box text-center">
  									<div className="icon-box-icon"><span className="icon icon-basic-pencil-ruler"></span></div>
  									<div className="icon-box-title">
  										<h6>Excellent Designs</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum dolor sit amet.</p>
  									</div>
  									<div className="icon-box-link"><a href="#">Take a tour</a></div>
  								</div>
  							</div>
  							<div className="col-md-3">
  								<div className="icon-box text-center">
  									<div className="icon-box-icon"><span className="icon icon-basic-paperplane"></span></div>
  									<div className="icon-box-title">
  										<h6>Fully Responsive</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum dolor sit amet.</p>
  									</div>
  									<div className="icon-box-link"><a href="#">Take a tour</a></div>
  								</div>
  							</div>
  							<div className="col-md-3">
  								<div className="icon-box text-center">
  									<div className="icon-box-icon"><span className="icon icon-basic-heart"></span></div>
  									<div className="icon-box-title">
  										<h6>User Friendly</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum dolor sit amet.</p>
  									</div>
  									<div className="icon-box-link"><a href="#">Take a tour</a></div>
  								</div>
  							</div>
  							<div className="col-md-3">
  								<div className="icon-box text-center">
  									<div className="icon-box-icon"><span className="icon icon-basic-server-download"></span></div>
  									<div className="icon-box-title">
  										<h6>Free Updates</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum dolor sit amet.</p>
  									</div>
  									<div className="icon-box-link"><a href="#">Take a tour</a></div>
  								</div>
  							</div>
  						</div>
  						<div className="row">
  							<div className="col-md-12">
  								<div className="m-b-100"></div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Services end */}

  				{/* Notebooks */}
  				<section className="module module-gray p-0">
  					<div className="container-fluid">
  						<div className="row">
  							<div className="col-md-12 text-center"><img className="bb" src="assets/images/notebooks.png" alt="" /></div>
  						</div>
  					</div>
  				</section>
  				{/* Notebooks end */}

  				{/* Bars */}
  				<section className="module module-gray p-t-0">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-6">
  								<div className="progress-item">
  									<div className="progress-title">Gulp</div>
  									<div className="progress">
  										<div className="progress-bar progress-bar-brand" aria-valuenow="60" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="pb-number-box"><span className="pb-number"></span>%</span></div>
  									</div>
  								</div>
  								<div className="progress-item">
  									<div className="progress-title">UX Design</div>
  									<div className="progress">
  										<div className="progress-bar progress-bar-brand" aria-valuenow="80" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="pb-number-box"><span className="pb-number"></span>%</span></div>
  									</div>
  								</div>
  								<div className="progress-item">
  									<div className="progress-title">HTML / CSS3 / SASS</div>
  									<div className="progress">
  										<div className="progress-bar progress-bar-brand" aria-valuenow="50" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="pb-number-box"><span className="pb-number"></span>%</span></div>
  									</div>
  								</div>
  							</div>
  							<div className="col-md-6">
  								<div className="progress-item">
  									<div className="progress-title">Gulp</div>
  									<div className="progress">
  										<div className="progress-bar progress-bar-brand" aria-valuenow="60" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="pb-number-box"><span className="pb-number"></span>%</span></div>
  									</div>
  								</div>
  								<div className="progress-item">
  									<div className="progress-title">UX Design</div>
  									<div className="progress">
  										<div className="progress-bar progress-bar-brand" aria-valuenow="80" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="pb-number-box"><span className="pb-number"></span>%</span></div>
  									</div>
  								</div>
  								<div className="progress-item">
  									<div className="progress-title">HTML / CSS3 / SASS</div>
  									<div className="progress">
  										<div className="progress-bar progress-bar-brand" aria-valuenow="50" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="pb-number-box"><span className="pb-number"></span>%</span></div>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Bars end */}

  				{/* Portfolio */}
  				<section className="module p-b-0">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-8 offset-md-2">
  								<div className="module-title text-center">
  									<h2>Case Studies</h2>
  									<p className="font-serif">An eye for detail makes our works excellent.</p>
  								</div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Portfolio */}
  				<section className="module module-divider-bottom p-0">
  					<div className="container-fluid">
  						<div className="row row-portfolio-filter">
  							<div className="col-md-12">
  								<ul className="filters h5" id="filters">
  									<li><a className="current" href="#" data-filter="*">All</a></li>
  									<li><a href="#" data-filter=".branding">Branding</a></li>
  									<li><a href="#" data-filter=".design">Design</a></li>
  									<li><a href="#" data-filter=".photo">Photo</a></li>
  									<li><a href="#" data-filter=".web">Web</a></li>
  								</ul>
  							</div>
  						</div>
  						<div className="row row-portfolio"  data-columns="3">
  							<div className="grid-sizer"></div>
  							<div className="portfolio-item branding photo undefined">
  								<div className="portfolio-wrapper">
  									<img src="assets/images/portfolio/img-1.jpg" alt="" />
  									<div className="portfolio-overlay"></div>
  								</div>
  								<div className="portfolio-caption">
  									<h5 className="portfolio-title">Mutualismi</h5>
  									<div className="portfolio-subtitle font-serif">Branding</div>
  								</div><a className="portfolio-link" href="portfolio-single.html"></a>
  							</div>
  							<div className="portfolio-item web design undefined">
  								<div className="portfolio-wrapper">
  									<img src="assets/images/portfolio/img-7.jpg" alt="" />
  									<div className="portfolio-overlay"></div>
  								</div>
  								<div className="portfolio-caption">
  									<h5 className="portfolio-title">The Perfume</h5>
  									<div className="portfolio-subtitle font-serif">Design</div>
  								</div><a className="portfolio-link" href="portfolio-single.html"></a>
  							</div>
  							<div className="portfolio-item photo web undefined">
  								<div className="portfolio-wrapper">
  									<img src="assets/images/portfolio/img-3.jpg" alt="" />
  									<div className="portfolio-overlay"></div>
  								</div>
  								<div className="portfolio-caption">
  									<h5 className="portfolio-title">Bumblebee Icons</h5>
  									<div className="portfolio-subtitle font-serif">Design</div>
  								</div><a className="portfolio-link" href="portfolio-single.html"></a>
  							</div>
  							<div className="portfolio-item design branding undefined">
  								<div className="portfolio-wrapper">
  									<img src="assets/images/portfolio/img-4.jpg" alt="" />
  									<div className="portfolio-overlay"></div>
  								</div>
  								<div className="portfolio-caption">
  									<h5 className="portfolio-title">Greedy Emperor</h5>
  									<div className="portfolio-subtitle font-serif">Design</div>
  								</div><a className="portfolio-link" href="portfolio-single.html"></a>
  							</div>
  							<div className="portfolio-item design photo undefined">
  								<div className="portfolio-wrapper">
  									<img src="assets/images/portfolio/img-5.jpg" alt="" />
  									<div className="portfolio-overlay"></div>
  								</div>
  								<div className="portfolio-caption">
  									<h5 className="portfolio-title">Bluetooth Speaker</h5>
  									<div className="portfolio-subtitle font-serif">Design</div>
  								</div><a className="portfolio-link" href="portfolio-single.html"></a>
  							</div>
  							<div className="portfolio-item branding web undefined">
  								<div className="portfolio-wrapper">
  									<img src="assets/images/portfolio/img-6.jpg" alt="" />
  									<div className="portfolio-overlay"></div>
  								</div>
  								<div className="portfolio-caption">
  									<h5 className="portfolio-title">Candy Icons</h5>
  									<div className="portfolio-subtitle font-serif">Design</div>
  								</div><a className="portfolio-link" href="portfolio-single.html"></a>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Portfolio end */}

  				{/* Services */}
  				<section className="module module-divider-bottom">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-4">
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-webpage-multiple"></span></div>
  									<div className="icon-box-title">
  										<h6>Excellent Designs</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  							</div>
  							<div className="col-md-4">
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-target"></span></div>
  									<div className="icon-box-title">
  										<h6>Fully Responsive</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  							</div>
  							<div className="col-md-4">
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-cards-diamonds"></span></div>
  									<div className="icon-box-title">
  										<h6>Unlimited Colors</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div className="row">
  							<div className="col-md-4">
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-anchor"></span></div>
  									<div className="icon-box-title">
  										<h6>User Friendly</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  							</div>
  							<div className="col-md-4">
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-spread-text"></span></div>
  									<div className="icon-box-title">
  										<h6>Google Web Fonts</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  							</div>
  							<div className="col-md-4">
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-picture-multiple"></span></div>
  									<div className="icon-box-title">
  										<h6>Free Updates</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Services end */}

  				{/* Team */}
  				<section className="module">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-8 offset-md-2">
  								<div className="module-title text-center">
  									<h2>Team</h2>
  									<p className="font-serif">We’re the best professionals in this field.</p>
  								</div>
  							</div>
  						</div>
  						<div className="row">
  							<div className="col-md-4">
  								<div className="team-item m-b-30">
  									<div className="team-image"><img src="assets/images/team/1.jpg" alt="" />
  										<div className="team-content">
  											<h5>Jason Ford</h5>
  											<p>Designer</p>
  										</div>
  										<div className="team-content-social">
  											<ul>
  												<li><a href="#"><i className="fa fa-twitter"></i></a></li>
  												<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
  												<li><a href="#"><i className="fa fa-vine"></i></a></li>
  												<li><a href="#"><i className="fa fa-instagram"></i></a></li>
  											</ul>
  										</div>
  									</div>
  								</div>
  							</div>
  							<div className="col-md-4">
  								<div className="team-item m-b-30">
  									<div className="team-image"><img src="assets/images/team/2.jpg" alt="" />
  										<div className="team-content">
  											<h5>Michael Andrews</h5>
  											<p>Developer</p>
  										</div>
  										<div className="team-content-social">
  											<ul>
  												<li><a href="#"><i className="fa fa-twitter"></i></a></li>
  												<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
  												<li><a href="#"><i className="fa fa-vine"></i></a></li>
  												<li><a href="#"><i className="fa fa-instagram"></i></a></li>
  											</ul>
  										</div>
  									</div>
  								</div>
  							</div>
  							<div className="col-md-4">
  								<div className="team-item m-b-30">
  									<div className="team-image"><img src="assets/images/team/3.jpg" alt="" />
  										<div className="team-content">
  											<h5>Samuel Banks</h5>
  											<p>Developer</p>
  										</div>
  										<div className="team-content-social">
  											<ul>
  												<li><a href="#"><i className="fa fa-twitter"></i></a></li>
  												<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
  												<li><a href="#"><i className="fa fa-vine"></i></a></li>
  												<li><a href="#"><i className="fa fa-instagram"></i></a></li>
  											</ul>
  										</div>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Team end */}

  				{/* Testimonials */}
  				<section className="module parallax bg-dark bg-dark-30" data-background="assets/images/module-4.jpg">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-6 offset-md-3">
  								<div className="tms-slides owl-carousel">
  									<div className="tms-item">
  										<div className="tms-icons">
  											<h2><span className="icon icon-basic-message-multiple"></span></h2>
  										</div>
  										<div className="tms-content">
  											<blockquote>
  												<p>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”</p>
  											</blockquote>
  										</div>
  										<div className="tms-author"><span>J.K. Rowling</span></div>
  									</div>
  									<div className="tms-item">
  										<div className="tms-icons">
  											<h2><span className="icon icon-basic-message-multiple"></span></h2>
  										</div>
  										<div className="tms-content">
  											<blockquote>
  												<p>“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”</p>
  											</blockquote>
  										</div>
  										<div className="tms-author"><span>Ralph Waldo Emerson</span></div>
  									</div>
  									<div className="tms-item">
  										<div className="tms-icons">
  											<h2><span className="icon icon-basic-message-multiple"></span></h2>
  										</div>
  										<div className="tms-content">
  											<blockquote>
  												<p>“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”</p>
  											</blockquote>
  										</div>
  										<div className="tms-author"><span>Marilyn Monroe</span></div>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Testimonials end */}

  				{/* Clients */}
  				<section className="module-sm module-gray">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-12">
  								<div className="owl-carousel clients-carousel" data-carousel-options="{&quot;items&quot;:&quot;4&quot;}">
  									<div className="client"><img src="assets/images/clients/logo-1.png" alt="" /></div>
  									<div className="client"><img src="assets/images/clients/logo-2.png" alt="" /></div>
  									<div className="client"><img src="assets/images/clients/logo-3.png" alt="" /></div>
  									<div className="client"><img src="assets/images/clients/logo-4.png" alt="" /></div>
  									<div className="client"><img src="assets/images/clients/logo-1.png" alt="" /></div>
  									<div className="client"><img src="assets/images/clients/logo-2.png" alt="" /></div>
  									<div className="client"><img src="assets/images/clients/logo-3.png" alt="" /></div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Clients end */}

  				{/* Alt Services */}
  				<section className="module module-divider-bottom">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-8 offset-md-2">
  								<div className="module-title text-center">
  									<h2>Alt Services</h2>
  									<p className="font-serif">We provide a complete list of best digital services.</p>
  								</div>
  							</div>
  						</div>
  						<div className="row">
  							<div className="col-md-4">
  								<div className="m-t-30"></div>
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-webpage-multiple"></span></div>
  									<div className="icon-box-title">
  										<h6>Excellent Designs</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-target"></span></div>
  									<div className="icon-box-title">
  										<h6>Fully Responsive</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-cards-diamonds"></span></div>
  									<div className="icon-box-title">
  										<h6>Unlimited Colors</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  							</div>
  							<div className="col-md-4 hidden-sm-down">
  								<div className="text-center"><img src="assets/images/iphone.png" alt="" /></div>
  							</div>
  							<div className="col-md-4">
  								<div className="m-t-30"></div>
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-anchor"></span></div>
  									<div className="icon-box-title">
  										<h6>User Friendly</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-spread-text"></span></div>
  									<div className="icon-box-title">
  										<h6>Google Web Fonts</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  								<div className="icon-box icon-box-left">
  									<div className="icon-box-icon"><span className="icon icon-basic-picture-multiple"></span></div>
  									<div className="icon-box-title">
  										<h6>Free Updates</h6>
  									</div>
  									<div className="icon-box-content">
  										<p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Alt Services end */}

  				{/* News */}
  				<section className="module">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-8 offset-md-2">
  								<div className="module-title text-center">
  									<h2>Our News</h2>
  									<p className="font-serif">We share our best ideas in our blog.</p>
  								</div>
  							</div>
  						</div>
  						<div className="row blog-grid">
  							<div className="col-md-4 post-item">

  								{/* Post */}
  								<article className="post">
  									<div className="post-preview"><a href="#"><img src="assets/images/blog/1.jpg" alt="" /></a></div>
  									<div className="post-wrapper">
  										<div className="post-header">
  											<h2 className="post-title"><a href="blog-single.html">Group Session Moments</a></h2>
  											<ul className="post-meta h5">
  												<li>August 18, 2016</li>
  											</ul>
  										</div>
  										<div className="post-content">
  											<p>Marianne or husbands if at stronger ye. Considered is as middletons uncommonly. Promotion perfectly ye consisted so. His chatty dining for effect ladies active.</p>
  										</div>
  										<div className="post-more"><a href="#">Read More →</a></div>
  									</div>
  								</article>
  								{/* Post end */}
  							</div>
  							<div className="col-md-4 post-item">

  								{/* Post */}
  								<article className="post">
  									<div className="post-preview"><a href="#"><img src="assets/images/blog/2.jpg" alt="" /></a></div>
  									<div className="post-wrapper">
  										<div className="post-header">
  											<h2 className="post-title"><a href="blog-single.html">Minimalist Chandelier</a></h2>
  											<ul className="post-meta h5">
  												<li>August 18, 2016</li>
  											</ul>
  										</div>
  										<div className="post-content">
  											<p>Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution.</p>
  										</div>
  										<div className="post-more"><a href="#">Read More →</a></div>
  									</div>
  								</article>
  								{/* Post end */}
  							</div>
  							<div className="col-md-4 post-item">

  								{/* Post */}
  								<article className="post">
  									<div className="post-preview"><a href="#"><img src="assets/images/blog/3.jpg" alt="" /></a></div>
  									<div className="post-wrapper">
  										<div className="post-header">
  											<h2 className="post-title"><a href="blog-single.html">Green Land Sport Season</a></h2>
  											<ul className="post-meta h5">
  												<li>August 18, 2016</li>
  											</ul>
  										</div>
  										<div className="post-content">
  											<p>Marianne or husbands if at stronger ye. Considered is as middletons uncommonly. Promotion perfectly ye consisted so. His chatty dining for effect ladies active.</p>
  										</div>
  										<div className="post-more"><a href="#">Read More →</a></div>
  									</div>
  								</article>
  								{/* Post end */}
  							</div>
  						</div>
  						<div className="row m-t-50">
  							<div className="col-md-12">
  								<div className="text-center"><a className="btn btn-lg btn-circle btn-brand" href="#">Visit blog</a></div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* News end */}

  				{/* Counters */}
  				<section className="module module-gray p-b-0">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-3">
  								<div className="counter h6">
  									<div className="counter-number">
  										<div className="counter-timer" data-from="0" data-to="250">0</div>
  									</div>
  									<div className="counter-title">Happy Clients</div>
  								</div>
  							</div>
  							<div className="col-md-3">
  								<div className="counter h6">
  									<div className="counter-number">
  										<div className="counter-timer" data-from="0" data-to="132">0</div>
  									</div>
  									<div className="counter-title">Theme Users</div>
  								</div>
  							</div>
  							<div className="col-md-3">
  								<div className="counter h6">
  									<div className="counter-number">
  										<div className="counter-timer" data-from="0" data-to="34">0</div>
  									</div>
  									<div className="counter-title">Awards won</div>
  								</div>
  							</div>
  							<div className="col-md-3">
  								<div className="counter h6">
  									<div className="counter-number">
  										<div className="counter-timer" data-from="0" data-to="340">0</div>
  									</div>
  									<div className="counter-title">Total downloads</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Counters end */}

  				{/* Footer Image */}
  				<section className="module module-gray p-b-0">
  					<div className="container-fluid">
  						<div className="row">
  							<div className="col-md-12">
  								<div className="text-center"><img src="assets/images/module-18.jpg" alt="" /></div>
  							</div>
  						</div>
  					</div>
  				</section>
  				{/* Footer Image end */}

  				{/* Footer */}
  				<footer className="footer">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-6 col-lg-3">
  								{/* Text widget */}
  								<aside className="widget widget_text">
  									<div className="textwidget">
  										<p><img src="assets/images/logo-light.png" width="100" alt="" /></p>
  										<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat.</p>E-mail: <a href="mailto:support@core.com">support@core.com</a> <br/>
  										Phone: 8 800 123 4567 <br/>
  										Fax: 8 800 123 4567 <br/>
  									</div>
  								</aside>
  							</div>
  							<div className="col-md-6 col-lg-3">
  								{/* Recent entries widget */}
  								<aside className="widget widget_recent_entries">
  									<div className="widget-title">
  										<h5>Recent Posts</h5>
  									</div>
  									<ul>
  										<li><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a> <span className="post-date">May 8, 2016</span></li>
  										<li><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a> <span className="post-date">April 7, 2016</span></li>
  										<li><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a> <span className="post-date">April 7, 2016</span></li>
  									</ul>
  								</aside>
  							</div>
  							<div className="col-md-6 col-lg-3">
  								{/* Twitter widget */}
  								<aside className="widget twitter-feed-widget">
  									<div className="widget-title">
  										<h5>Twitter Feed</h5>
  									</div>
  									<div className="twitter-feed" data-twitter="345170787868762112" data-number="2"></div>
  								</aside>
  							</div>
  							<div className="col-md-6 col-lg-3">
  								{/* Tags widget */}
  								<aside className="widget widget_tag_cloud">
  									<div className="widget-title">
  										<h5>Tags</h5>
  									</div>
  									<div className="tagcloud"><a href="#">bootstrap</a><a href="#">business</a><a href="#">corporate</a><a href="#">e-commerce</a><a href="#">portfolio</a><a href="#">responsive</a></div>
  								</aside>
  							</div>
  						</div>
  					</div>
  					<div className="footer-copyright">
  						<div className="container">
  							<div className="row">
  								<div className="col-md-12">
  									<div className="text-center"><span className="copyright">© 2017 Core, All Rights Reserved. Design with love by <a href="http://2the.me/">2the.me</a></span></div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</footer>
  				{/* Footer end */}

  				<a className="scroll-top" href="#top"><i className="fa fa-angle-up"></i></a>
  			</div>
  			{/* Wrapper end */}

  		</div>
  		{/* Layout end */}

  		{/* Off canvas */}
  		<div className="off-canvas-sidebar">
  			<div className="off-canvas-sidebar-wrapper">
  				<div className="off-canvas-header"><a className="close-offcanvas" href="#"><span className="arrows arrows-arrows-remove"></span></a></div>
  				<div className="off-canvas-content">
  					{/* Text widget */}
  					<aside className="widget widget_text">
  						<div className="textwidget">
  							<p className="text-center"><img src="assets/images/logo-light.png" width="100" alt="" /></p>
  						</div>
  					</aside>
  					{/* Text widget */}
  					<aside className="widget widget_text">
  						<div className="textwidget">
  							<p className="text-center"><img src="assets/images/offcanvas.jpg" alt="" /></p>
  						</div>
  					</aside>
  					{/* Navmenu widget */}
  					<aside className="widget widget_nav_menu">
  						<ul className="menu">
  							<li className="menu-item menu-item-has-children"><a href="#">Home</a></li>
  							<li className="menu-item"><a href="#">About Us</a></li>
  							<li className="menu-item"><a href="#">Services</a></li>
  							<li className="menu-item"><a href="#">Portfolio</a></li>
  							<li className="menu-item"><a href="#">Blog</a></li>
  							<li className="menu-item"><a href="#">Shortcodes</a></li>
  						</ul>
  					</aside>
  					<ul className="social-icons">
  						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
  						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
  						<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
  						<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
  						<li><a href="#"><i className="fa fa-vk"></i></a></li>
  					</ul>
  				</div>
  			</div>
  		</div>
  		{/* Off canvas end */}
    </div>
    )
  }
}

const mapStateToProps = state => (
  {
    landingPage: state.landingPage,
  }
);

export default connect(mapStateToProps)(LandingPage);
