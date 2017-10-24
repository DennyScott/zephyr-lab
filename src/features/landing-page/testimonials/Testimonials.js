import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const testimonials = props => {
let parallaxStyle = {
  backgroundImage: "url(" + props.image + ")",
  height: "100%",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

let settings = {
  dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
}

return (
  <section className="module parallax bg-dark bg-dark-30" style={parallaxStyle}>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Slider {...settings} className="tms-slides">
            <div className="tms-item">
              <div className="tms-icons">
                <h2><span className="icon icon-basic-message-multiple"></span></h2>
              </div>
              <div className="tms-content">
                <blockquote>
                  <p>“If you cannot do great things, do small things in a great way.”</p>
                </blockquote>
              </div>
              <div className="tms-author"><span>Napoleon Hill</span></div>
            </div>
            <div className="tms-item">
              <div className="tms-icons">
                <h2><span className="icon icon-basic-message-multiple"></span></h2>
              </div>
              <div className="tms-content">
                <blockquote>
                  <p>“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.”</p>
                </blockquote>
              </div>
              <div className="tms-author"><span>J.K. Rowling</span></div>
            </div>
            <div className="tms-item">
              <div className="tms-icons">
                <h2><span className="icon icon-basic-message-multiple"></span></h2>
              </div>
              <div className="tms-content">
                <blockquote>
                  <p>“It’s all that Ocarina kid’s fault!  Next time he comes around here, I’m gonna mess him up!”</p>
                </blockquote>
              </div>
              <div className="tms-author"><span>Guru-guru</span></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </section>
);
}

testimonials.propTypes = {
  image: PropTypes.string.isRequired,
}

export default testimonials;
