import React, { Component } from 'react';
import './bars.css';
import ProgressBar from './ProgressBar';

export default class Bars extends Component {

  render() {
    return (
      <section className="module module-gray bars">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ProgressBar title="Gameplay Programming" width="90%" />
              <ProgressBar title="C#" width="80%" />
              <ProgressBar title="Tools Development" width="60%" />
            </div>
            <div className="col-md-6">
              <ProgressBar title="C++" width="50%" />
              <ProgressBar title="Unity" width="90%" />
              <ProgressBar title="Javascript" width="70%" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
