import React from 'react';

import clientLogoOne from '../../../assets/images/clients/logo-1.png';
import clientLogoTwo from '../../../assets/images/clients/logo-2.png';
import clientLogoThree from '../../../assets/images/clients/logo-3.png';
import clientLogoFour from '../../../assets/images/clients/logo-4.png';

const clients = props => (
  <section className="module-sm module-gray">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="owl-carousel clients-carousel" data-carousel-options="{&quot;items&quot;:&quot;4&quot;}">
            <div className="client"><img src={clientLogoOne} alt="" /></div>
            <div className="client"><img src={clientLogoTwo} alt="" /></div>
            <div className="client"><img src={clientLogoThree} alt="" /></div>
            <div className="client"><img src={clientLogoFour} alt="" /></div>
            <div className="client"><img src={clientLogoOne} alt="" /></div>
            <div className="client"><img src={clientLogoTwo} alt="" /></div>
            <div className="client"><img src={clientLogoThree} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default clients;
