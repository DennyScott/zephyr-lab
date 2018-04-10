import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

const testimonials = props => {
  let parallaxStyle = {
    backgroundImage: "url(" + props.image + ")",
    height: "100%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section
      className="module parallax bg-dark bg-dark-30"
      style={parallaxStyle}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 force-space" />
        </div>
      </div>
    </section>
  );
};

testimonials.propTypes = {
  image: PropTypes.string.isRequired
};

export default testimonials;
