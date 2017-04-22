import React, { Component } from 'react';
import './bars.css';
import ProgressBar from './ProgressBar';

export default class Bars extends Component {

  render() {
    return (
      <section className="module module-gray p-t-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ProgressBar title="gulp" width="25%" />
              <ProgressBar title="UX Design" width="80%" />
              <ProgressBar title="HTML / CSS3 / SASS" width="80%" />
            </div>
            <div className="col-md-6">
              <ProgressBar title="gulp" width="25%" />
              <ProgressBar title="UX Design" width="80%" />
              <ProgressBar title="HTML / CSS3 / SASS" width="80%" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
