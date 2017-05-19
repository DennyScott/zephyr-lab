import React from 'react';

import footer from '../../../assets/images/module-18.jpg';
import './footer-image.css';

const footerImage = props => (
  <section className="module module-gray footer-image">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center"><img src={footer} alt="" /></div>
        </div>
      </div>
    </div>
  </section>
);

export default footerImage;
