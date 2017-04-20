import React from 'react';
import iphone from '../../../assets/images/iphone.png';

const altServices = props => (
  <section className="module module-divider-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="module-title text-center">
            <h2>Alt Services</h2>
            <p className="font-serif">We provide a complete list of best digital services.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="m-t-30"></div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-webpage-multiple"></span></div>
            <div className="icon-box-title">
              <h6>Excellent Designs</h6>
            </div>
            <div className="icon-box-content">
              <p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-target"></span></div>
            <div className="icon-box-title">
              <h6>Fully Responsive</h6>
            </div>
            <div className="icon-box-content">
              <p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-cards-diamonds"></span></div>
            <div className="icon-box-title">
              <h6>Unlimited Colors</h6>
            </div>
            <div className="icon-box-content">
              <p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
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
              <h6>User Friendly</h6>
            </div>
            <div className="icon-box-content">
              <p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-spread-text"></span></div>
            <div className="icon-box-title">
              <h6>Google Web Fonts</h6>
            </div>
            <div className="icon-box-content">
              <p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
            </div>
          </div>
          <div className="icon-box icon-box-left">
            <div className="icon-box-icon"><span className="icon icon-basic-picture-multiple"></span></div>
            <div className="icon-box-title">
              <h6>Free Updates</h6>
            </div>
            <div className="icon-box-content">
              <p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default altServices;
