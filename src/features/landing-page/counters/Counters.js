import React, { Component } from 'react';
import Counter from './Counter';

export default class Counters extends Component {

render() {
  let to = 100;
  let toTwo = 500;

  return(
    <section className="module module-gray p-b-0">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Counter to={to} title="Happy Clients" />
          </div>
          <div className="col-md-3">
            <Counter to={toTwo} title="Theme Users" />
          </div>
          <div className="col-md-3">
            <Counter to={to} title="Awards Won" />
          </div>
          <div className="col-md-3">
            <Counter to={toTwo} title="Total Downloads" />
          </div>
        </div>
      </div>
    </section>
  );
}
}
