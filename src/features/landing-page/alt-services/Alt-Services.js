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
            <h2>Data & Analytics</h2>
            <p className="font-serif">We provide a complete set of analytics for your products!</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="m-t-30"></div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-webpage-multiple"></span></div>
            <div className="icon-box-title">
              <h6>Data Funnels</h6>
            </div>
            <div className="icon-box-content">
              <p>Track a series of events that lead towards a defined goal,from user engagement in a mobile app to a sale in an eCommerce platform.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-target"></span></div>
            <div className="icon-box-title">
              <h6>User Testing</h6>
            </div>
            <div className="icon-box-content">
              <p>Identify and isolate UX and UI issues in your applications. By conducting user testing, we can optimize your product to better suite customers.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-cards-diamonds"></span></div>
            <div className="icon-box-title">
              <h6>Customer Surveys and Live Chat</h6>
            </div>
            <div className="icon-box-content">
              <p>Conduct written surveys to collect aggregated feedback. Chat to you customers live to help them complete their flows, and imporve your product.</p>
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
              <h6>Heat Map Reports</h6>
            </div>
            <div className="icon-box-content">
              <p>Heatmaps provide you with highly visual feedback to your site. These allow you to see which areas your cutomers are and aren't engaging in.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-spread-text"></span></div>
            <div className="icon-box-title">
              <h6>Performance Optimizations</h6>
            </div>
            <div className="icon-box-content">
              <p>In a world of growing mobile traffic, users retention rates are heavily correlated to performance. Using analytics identify these pain points.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-picture-multiple"></span></div>
            <div className="icon-box-title">
              <h6>Realtime Data Insights</h6>
            </div>
            <div className="icon-box-content">
              <p>Having data to provide solid buisness choices about your customers and products is great, but having it in realtime can push you past your competition.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default altServices;
