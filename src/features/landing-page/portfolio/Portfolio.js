import React from 'react';

import imageOne from '../../../assets/images/portfolio/img-1.jpg';
import imageSeven from '../../../assets/images/portfolio/img-7.jpg';
import imageThree from '../../../assets/images/portfolio/img-3.jpg';
import imageFour from '../../../assets/images/portfolio/img-4.jpg';
import imageFive from '../../../assets/images/portfolio/img-5.jpg';
import imageSix from '../../../assets/images/portfolio/img-6.jpg';

import './portfolio.css';

const portfolio = props => (
  <div>
  <section className="module p-b-0">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="module-title text-center">
            <h2>Case Studies</h2>
            <p className="font-serif">An eye for detail makes our works excellent.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="module module-divider-bottom p-0">
    <div className="container-fluid">
      <div className="row row-portfolio-filter">
        <div className="col-md-12">
          <ul className="filters h5" id="filters">
            <li><a className="current" href="#" data-filter="*">All</a></li>
            <li><a href="#" data-filter=".branding">Branding</a></li>
            <li><a href="#" data-filter=".design">Design</a></li>
            <li><a href="#" data-filter=".photo">Photo</a></li>
            <li><a href="#" data-filter=".web">Web</a></li>
          </ul>
        </div>
      </div>
      <div className="row row-portfolio"  data-columns="3">
        <div className="portfolio-item branding photo">
          <div className="portfolio-wrapper">
            <img src={imageOne} alt="" />
            <div className="portfolio-overlay"></div>
          </div>
          <div className="portfolio-caption">
            <h5 className="portfolio-title">Mutualismi</h5>
            <div className="portfolio-subtitle font-serif">Branding</div>
          </div><a className="porfolio-link-to" href="portfolio-single.html"></a>
        </div>
        <div className="portfolio-item web design">
          <div className="portfolio-wrapper">
            <img src={imageSeven} alt="" />
            <div className="portfolio-overlay"></div>
          </div>
          <div className="portfolio-caption">
            <h5 className="portfolio-title">The Perfume</h5>
            <div className="portfolio-subtitle font-serif">Design</div>
          </div><a className="porfolio-link-to" href="portfolio-single.html"></a>
        </div>
        <div className="portfolio-item photo web">
          <div className="portfolio-wrapper">
            <img src={imageThree} alt="" />
            <div className="portfolio-overlay"></div>
          </div>
          <div className="portfolio-caption">
            <h5 className="portfolio-title">Bumblebee Icons</h5>
            <div className="portfolio-subtitle font-serif">Design</div>
          </div><a className="porfolio-link-to" href="portfolio-single.html"></a>
        </div>
        <div className="portfolio-item design branding">
          <div className="portfolio-wrapper">
            <img src={imageFour} alt="" />
            <div className="portfolio-overlay"></div>
          </div>
          <div className="portfolio-caption">
            <h5 className="portfolio-title">Greedy Emperor</h5>
            <div className="portfolio-subtitle font-serif">Design</div>
          </div><a className="porfolio-link-to" href="portfolio-single.html"></a>
        </div>
        <div className="portfolio-item design photo">
          <div className="portfolio-wrapper">
            <img src={imageFive} alt="" />
            <div className="portfolio-overlay"></div>
          </div>
          <div className="portfolio-caption">
            <h5 className="portfolio-title">Bluetooth Speaker</h5>
            <div className="portfolio-subtitle font-serif">Design</div>
          </div><a className="porfolio-link-to" href="portfolio-single.html"></a>
        </div>
        <div className="portfolio-item branding web">
          <div className="portfolio-wrapper">
            <img src={imageSix} alt="" />
            <div className="portfolio-overlay"></div>
          </div>
          <div className="portfolio-caption">
            <h5 className="portfolio-title">Candy Icons</h5>
            <div className="portfolio-subtitle font-serif">Design</div>
          </div><a className="porfolio-link-to" href="portfolio-single.html"></a>
        </div>
      </div>
    </div>
  </section>
  </div>
);

export default portfolio;
