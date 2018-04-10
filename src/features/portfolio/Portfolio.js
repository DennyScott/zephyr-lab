import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import RelatedWork from "./related-work";
import "./portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.isMount = false;
  }

  state = {
    isScrolled: false,
    isScrolledLow: false,
    project: {
      images: [],
      relatedWork: []
    }
  };

  stickySidebar = () => {
    if (!this.isMount) return;
    let { isScrolled } = this.state;

    if (window.scrollY > 185) {
      if (isScrolled) return;

      this.setState({ isScrolled: true });
    } else {
      if (!isScrolled) return;

      this.setState({ isScrolled: false });
    }
  };

  stickySidebarLow = () => {
    if (!this.isMount) return;
    let { isScrolledLow } = this.state;

    if (window.scrollY > 1565) {
      if (isScrolledLow) return;
      this.setState({ isScrolledLow: true });
    } else {
      if (!isScrolledLow) return;

      this.setState({ isScrolledLow: false });
    }
  };

  componentDidMount() {
    document.title = "Denny Scott - Portfolio";
    this.setState({
      project: this.props.portfolio[this.props.match.params.id - 1]
    });
    window.scrollTo(0, 0);
    this.isMount = true;
    window.addEventListener("scroll", this.stickySidebar);
    window.addEventListener("scroll", this.stickySidebarLow);
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  render() {
    const { project } = this.state;
    return (
      <div className="wrapper">
        <section className="module-page-title">
          <div className="container">
            <div className="row-page-title">
              <div className="page-title-captions">
                <h1 className="h5">{project.title}</h1>
              </div>
              <div className="page-title-secondary">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Portfolio</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="portfolio-content">
                  {project.images.map((img, i) => (
                    <p key={i}>
                      <a href="#" title={img} rel="single-photo">
                        <img src={img} alt="" />
                      </a>
                    </p>
                  ))}
                </div>
              </div>
              <div className="col-lg-4" data-sticky_parent>
                <div
                  className={
                    "portfolio-sidebar sticky-sidebar " +
                    (this.state.isScrolled ? "make-stick " : " ") +
                    (this.state.isScrolledLow ? "low-stick" : "")
                  }
                >
                  <h3 className="single-portfolio-title">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfoli-details">
                    <ul>
                      <li>
                        <h5>Date:</h5> {project.date}
                      </li>
                      <li>
                        <h5>Client:</h5> {project.client}
                      </li>
                      <li>
                        <h5>Technologuy:</h5>
                        <a href="#">{project.technology}</a>
                      </li>
                      {project.link && (
                        <li>
                          <h5>See more:</h5>
                          <a href={project.link}>Try me here!</a>
                        </li>
                      )}
                      <li>
                        <h5>Share:</h5>
                        <ul className="social-icons">
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-vk" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="module module-divider-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-uppercase text-center m-b-50">
                  Related Works
                </h4>
              </div>
            </div>
            <div className="row row-portfolio row-related-portfolio">
              {project.relatedWork.map((work, i) => (
                <RelatedWork key={i} project={this.props.portfolio[work - 1]} />
              ))}
            </div>
          </div>
        </section>

        <section className="module-sm module-gray">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="ps-prev">
                  <a href="#">
                    <span className="arrows arrows-arrows-slim-left" />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="ps-all">
                  <a className="h4" href="#">
                    All Works
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="ps-next">
                  <a href="#">
                    <span className="arrows arrows-arrows-slim-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps)(Portfolio);
