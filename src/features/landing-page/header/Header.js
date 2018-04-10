import React from "react";
import video from "../../../assets/video/2mb.mp4";
import videoPoster from "../../../assets/video/background.jpg";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";

const scrollDown = () => {
  scroller.scrollTo("skills", { duration: 600, offset: -100, smooth: true });
};

const Header = props => (
  <section className="module-header full-height parallax bg-dark bg-dark-60">
    <Element name="home" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="h1 m-b-20">Denny Scott</h1>
          <p className="m-b-40">
            Software Developer - Open Source Fan - Undependable Blogger.
          </p>
          <p>
            <Link
              to="/"
              className="btn btn-lg btn-circle btn-brand"
              onClick={scrollDown}
            >
              See my Projects
            </Link>
          </p>
        </div>
      </div>
    </div>
    <video autoPlay loop muted className="full-video" poster={videoPoster}>
      <source src={video} type="video/mp4" />
    </video>
  </section>
);

export default Header;
