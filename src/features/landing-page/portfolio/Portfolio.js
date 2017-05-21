import React from 'react';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './portfolio.css';

const portfolioItem = project => (
  <Link to={`portfolio/${project.id}`} key={project.id} className="portfolio-item branding photo">
    <div className="portfolio-wrapper">
      <img src={project.images[0]} alt="" />
      <div className="portfolio-overlay"></div>
    </div>
    <div className="portfolio-caption">
      <h5 className="portfolio-title">{project.title}</h5>
      <div className="portfolio-subtitle font-serif">{project.technology}</div>
    </div>
  </Link>
)

const portfolio = props => (
  <section className="module module-divider-bottom">
    <Element name="portfolio" />
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

    <div className="container">
      <div className="row row-portfolio"  data-columns="3">
        {
          props.portfolio.slice(0,6).map(project => portfolioItem(project))
        }
      </div>
    </div>
  </section>
);

const mapStateToProps = state => ({
    portfolio: state.portfolio,
});

export default connect(mapStateToProps)(portfolio);
