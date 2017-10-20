import React from 'react';
import { Element } from 'react-scroll';
import iphone from '../../../assets/images/iphone.png';

const altServices = props => (
  <section className="module module-divider-bottom">
    <Element name="services" />
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="module-title text-center">
            <h2>General Skills</h2>
            <p className="font-serif">Process and interpersonal skills</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="m-t-30"></div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-webpage-multiple"></span></div>
            <div className="icon-box-title">
              <h6>Agile and Scrum</h6>
            </div>
            <div className="icon-box-content">
              <p>Experience working and managing a team using agile and scrum processes. As both a technical lead and scrum master, it was my responsibility to both guide and adapt our processes.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-target"></span></div>
            <div className="icon-box-title">
              <h6>Test Driven Development</h6>
            </div>
            <div className="icon-box-content">
              <p>Projects ranging from Unity to web app games that utilize common test-driven development practices.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-cards-diamonds"></span></div>
            <div className="icon-box-title">
              <h6>Continous Delivery</h6>
            </div>
            <div className="icon-box-content">
              <p>Projects that are released more frequently are often less risky and less buggy, and is a primary goal for all my work.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 hidden-sm-down">
          <div className="text-center"><img src={iphone} alt="" /></div>
        </div>
        <div className="col-md-4">
          <div className="m-t-30"></div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-anchor"></span></div>
            <div className="icon-box-title">
              <h6>Project Architecture</h6>
            </div>
            <div className="icon-box-content">
              <p>When working on a large project in Unity, architecture has a huge role, and my responsibility, to properly allow version control.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-spread-text"></span></div>
            <div className="icon-box-title">
              <h6>Performance Analysis & Optimizations</h6>
            </div>
            <div className="icon-box-content">
              <p>Using tools ranging from Unity performance tools, Visual Studio tools, and in app analytics to gauge and analyze possible optimizations.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-picture-multiple"></span></div>
            <div className="icon-box-title">
              <h6>Teamwork</h6>
            </div>
            <div className="icon-box-content">
              <p>Working with an awesome team in a great culture is the best part of the job, and I hope I can add to that any way I can!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default altServices;
