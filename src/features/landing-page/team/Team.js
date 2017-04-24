import React from 'react';
import { Element } from 'react-scroll';

import teamOne from '../../../assets/images/team/1.jpg';
import teamTwo from '../../../assets/images/team/2.jpg';
import teamThree from '../../../assets/images/team/3.jpg';

const team = props => (
  <section className="module">
    <Element name="team" />
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
            <div className="team-image"><img src={teamOne} alt="" />
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
            <div className="team-image"><img src={teamTwo} alt="" />
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
            <div className="team-image"><img src={teamThree} alt="" />
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
);

export default team;
