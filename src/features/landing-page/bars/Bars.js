import React, { Component } from "react";
import "./bars.css";
import ProgressBar from "./ProgressBar";

export default class Bars extends Component {
  render() {
    return (
      <section className="module module-gray bars">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ProgressBar title="Networking" width="75%" />
              <ProgressBar title="C#" width="90%" />
              <ProgressBar title="Tools Development" width="90%" />
            </div>
            <div className="col-md-6">
              <ProgressBar title="C++" width="60%" />
              <ProgressBar title="Unity" width="90%" />
              <ProgressBar title="Javascript" width="100%" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
