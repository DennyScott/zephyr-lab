import React from 'react';
import video from '../../../assets/video/video.mp4';
import videoPoster from '../../../assets/video/video.jpg';
import { Element } from 'react-scroll';

const Header = (props) => (
  <section className="module-header full-height parallax bg-dark bg-dark-90">
  <Element name="home" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="h6 m-b-20">THINK. DEFINE. DESIGN.</h1>
        <h1 className="h1 m-b-20">We Are Business</h1>
        <p className="m-b-40">Start with co-working way in our studio.</p>
        <p><a className="btn btn-lg btn-circle btn-brand" href="#">Let’s get started!</a></p>
      </div>
    </div>
  </div>
    <video autoPlay loop muted className="full-video" poster={videoPoster}>
      <source src={video} type="video/mp4" />
    </video>
</section>
);

export default Header;
