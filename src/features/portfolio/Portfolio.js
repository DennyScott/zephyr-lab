import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import imageOne from '../../assets/images/portfolio/img-1.jpg';
import imageTwo from '../../assets/images/portfolio/img-2.jpg';
import imageThree from '../../assets/images/portfolio/img-3.jpg';
import imageFour from '../../assets/images/portfolio/img-4.jpg';
import imageFive from '../../assets/images/portfolio/img-5.jpg';
import imageSix from '../../assets/images/portfolio/img-6.jpg';
import imageSeven from '../../assets/images/portfolio/img-7.jpg';
import RelatedWork from './related-work';
import './portfolio.css';

class Portfolio extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    isScrolled: false,
    isScrolledLow: false,
    project: {
      images: [],
      relatedWork: []
    }
  }

  stickySidebar = () => {
    let { isScrolled } = this.state;

    if(window.scrollY > 185) {
      if(isScrolled) return;

      this.setState({isScrolled: true});
    } else {
      if(!isScrolled) return;

      this.setState({isScrolled: false});
    }
  }

  stickySidebarLow = () => {
    let { isScrolledLow } = this.state;

    if(window.scrollY > 1565) {
      if(isScrolledLow) return;
      this.setState({isScrolledLow: true});
    } else {
      if(!isScrolledLow) return;

      this.setState({isScrolledLow: false});
    }
  }

  componentDidMount() {
    document.title = "Zephyr Labs - Portfolio"
    this.setState({ project: this.props.portfolio[this.props.match.params.id - 1]});
    window.scrollTo(0,0);
    window.addEventListener('scroll', this.stickySidebar);
    window.addEventListener('scroll', this.stickySidebarLow);
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
									<li className="breadcrumb-item"><Link to="/">Home</Link></li>
									<li className="breadcrumb-item"><Link to="#">Portfolio</Link></li>
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
                  {
                    project.images.map((img, i) => (<p key={i}><a href="#" title={img} rel="single-photo"><img src={img} alt="" /></a></p>))
                  }
								</div>
							</div>
							<div className="col-lg-4" data-sticky_parent>
								<div className={"portfolio-sidebar sticky-sidebar " + (this.state.isScrolled ? 'make-stick ' : ' ') + (this.state.isScrolledLow ? 'low-stick' : '') }>
									<h3 className="single-portfolio-title">{ project.title }</h3>
									<p>{ project.description }</p>
									<div className="portfoli-details">
										<ul>
											<li>
												<h5>Date:</h5> { project.date }
											</li>
											<li>
												<h5>Client:</h5> { project.client }
											</li>
											<li>
												<h5>Technologuy:</h5>
                          <a href="#">{project.technology}</a>
											</li>
											<li>
												<h5>Share:</h5>
												<ul className="social-icons">
													<li><a href="#"><i className="fa fa-facebook"></i></a></li>
													<li><a href="#"><i className="fa fa-twitter"></i></a></li>
													<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
													<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
													<li><a href="#"><i className="fa fa-vk"></i></a></li>
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
								<h4 className="text-uppercase text-center m-b-50">Related Works</h4>
							</div>
						</div>
            <div className="row row-portfolio row-related-portfolio" >
            {
              project.relatedWork.map((work, i) => (
                <RelatedWork key={i} project={this.props.portfolio[work - 1]} />
              ))
            }
            </div>
					</div>
				</section>

				<section className="module-sm module-gray">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="ps-prev"><a href="#"><span className="arrows arrows-arrows-slim-left"></span></a></div>
							</div>
							<div className="col">
								<div className="ps-all"><a className="h4" href="#">All Works</a></div>
							</div>
							<div className="col">
								<div className="ps-next"><a href="#"><span className="arrows arrows-arrows-slim-right"></span></a></div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    portfolio: state.portfolio
  }
);

export default connect(mapStateToProps)(Portfolio);
