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
              <h6>VR</h6>
            </div>
            <div className="icon-box-content">
              <p>Developed Virtual Reality games targetting mediums such as Occulus Rift and Google VR.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="icon-box text-center">
            <div className="icon-box-icon"><span className="icon icon-basic-paperplane"></span></div>
            <div className="icon-box-title">
              <h6>Cross Platform Development</h6>
            </div>
            <div className="icon-box-content">
              <p>Released projects that target multiple platforms ranging from PC, to in-store tablets, to mobile apps.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="icon-box text-center">
            <div className="icon-box-icon"><span className="icon icon-basic-heart"></span></div>
            <div className="icon-box-title">
              <h6>Multi-Disciplinary</h6>
            </div>
            <div className="icon-box-content">
              <p>A wide-breadth of experience, including consumer apps for in store purchases, and top-down 2d games.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="icon-box text-center">
            <div className="icon-box-icon"><span className="icon icon-basic-server-download"></span></div>
            <div className="icon-box-title">
              <h6>Technical Lead</h6>
            </div>
            <div className="icon-box-content">
              <p>Lead multiple small teams with wide varieties in experience, developing and releasing small to corporate projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default services;
