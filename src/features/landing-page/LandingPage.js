import React, { Component } from 'react';
import { connect } from 'react-redux';

import parallaxImage from '../../assets/images/office.jpg';

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

class LandingPage extends Component {

  componentDidMount() {
    document.title = "Zephyr Labs";
  }

  render() {

    return (

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
