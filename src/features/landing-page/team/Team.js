import React from 'react';
import { Element } from 'react-scroll';

import teamOne from '../../../assets/images/team/iqmetrix.jpg';
import teamTwo from '../../../assets/images/team/ct.jpg';
import teamThree from '../../../assets/images/team/concord.jpg';

const team = props => (
  <section className="module">
    <Element name="team" />
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="module-title text-center">
            <h2>Past Experience</h2>
            <p className="font-serif">Smarter then we look.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="team-item m-b-30">
            <div className="team-image"><img src={teamOne} alt="" />
              <div className="team-content">
                <h5>IQMetrix</h5>
                <p>Unity Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="team-item m-b-30">
            <div className="team-image"><img src={teamTwo} alt="" />
              <div className="team-content">
                <h5>Canadian Tire</h5>
                <p>Technical Lead and Unity Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="team-item m-b-30">
            <div className="team-image"><img src={teamThree} alt="" />
              <div className="team-content">
                <h5>Concord Projects</h5>
                <p>Technical Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default team;
