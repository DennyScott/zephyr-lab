import React from 'react';
import './related-work.css';
import { Link } from 'react-router-dom';

const relatedWork = props => (
    <div className="col-md-4 col-sm-12 related-work">
      <div className="portfolio-wrapper">
        <img src={props.project.images[0]} alt="" />
        <Link to={`/portfolio/${props.project.id}`}
          onClick={() => {this.window.scrollTo(0,0)}}
          className="portfolio-overlay">
        <div className="portfolio-caption">
          <h5 className="portfolio-title">{props.project.title}</h5>
        </div>
        </Link>
      </div>
    </div>
)

export default relatedWork;
