import React from 'react';
import { Element } from 'react-scroll';

const services = (props) => (
  <section className="module">
    <Element name="skills" />
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="icon-box text-center">
            <div className="icon-box-icon"><span className="icon icon-basic-pencil-ruler"></span></div>
            <div className="icon-box-title">
              <h6>Design</h6>
            </div>
            <div className="icon-box-content">
              <p>We are graphic designers.  From marketing material to user-interface, we design it all!</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="icon-box text-center">
            <div className="icon-box-icon"><span className="icon icon-basic-paperplane"></span></div>
            <div className="icon-box-title">
              <h6>Development</h6>
            </div>
            <div className="icon-box-content">
              <p>Let us create your website, software, or web-based application. We can build to any platform you need.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="icon-box text-center">
            <div className="icon-box-icon"><span className="icon icon-basic-heart"></span></div>
            <div className="icon-box-title">
              <h6>Modern Web</h6>
            </div>
            <div className="icon-box-content">
              <p>Don't allow your online presence to fall behind in the times. Let us show you what the web is capable of today.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="icon-box text-center">
            <div className="icon-box-icon"><span className="icon icon-basic-server-download"></span></div>
            <div className="icon-box-title">
              <h6>Mobile Applications</h6>
            </div>
            <div className="icon-box-content">
              <p>We develop apps for iPhone, iPad, Android, Windows 8 and many more. We can create what you want.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default services;
