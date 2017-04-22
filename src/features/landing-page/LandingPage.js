import React, { Component } from 'react';
import { connect } from 'react-redux';

import parallaxImage from '../../assets/images/module-4.jpg';

import './landing-page.css';

import Header from './header/Header';
import Services from './services/Services';
import Notebooks from './notebooks/Notebooks';
import Bars from './bars/Bars';
import Portfolio from './portfolio/Portfolio';
import ExtendedServices from './extended-services/Extended-Services';
import Team from './team/Team';
import Testimonials from './testimonials/Testimonials';
import AltServices from './alt-services/Alt-Services';
import News from './news/News';
import Counters from './counters/Counters';
import FooterImage from './footer-image/Footer-Image';

class LandingPage extends Component {
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
  		<div className="layout" style={this.fadeIn}>

  			<div className="wrapper">

          <Header />
  				<Services />
  				<Notebooks />
          <Bars />

          <Portfolio />
          <ExtendedServices />
          <Team />
          <Testimonials image={parallaxImage}/>
          <AltServices />
          <News />
          <Counters />
          <FooterImage />
  			</div>

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
