import React from 'react';

const counters = props => (
  <section className="module module-gray p-b-0">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="counter h6">
            <div className="counter-number">
              <div className="counter-timer" data-from="0" data-to="250">0</div>
            </div>
            <div className="counter-title">Happy Clients</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="counter h6">
            <div className="counter-number">
              <div className="counter-timer" data-from="0" data-to="132">0</div>
            </div>
            <div className="counter-title">Theme Users</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="counter h6">
            <div className="counter-number">
              <div className="counter-timer" data-from="0" data-to="34">0</div>
            </div>
            <div className="counter-title">Awards won</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="counter h6">
            <div className="counter-number">
              <div className="counter-timer" data-from="0" data-to="340">0</div>
            </div>
            <div className="counter-title">Total downloads</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default counters;
