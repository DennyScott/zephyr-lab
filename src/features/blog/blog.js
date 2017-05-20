import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BlogSnippet from './blog-snippet/Blog-Snippet';
import Sidebar from './blog-sidebar/SideBar';

import './blog.css';

class Blog extends Component {

  componentDidMount() {
    document.title = "Blog";
  }

  render() {
    const { blog, tags } = this.props;
    return (
			<div className="wrapper">
				<section className="module-page-title">
					<div className="container">
						<div className="row-page-title">
							<div className="page-title-captions">
								<h1 className="h5">Zephyr Labs Blog</h1>
							</div>
							<div className="page-title-secondary">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/">Home</Link></li>
									<li className="breadcrumb-item"><Link to="#">Blog</Link></li>
								</ol>
							</div>
						</div>
					</div>
				</section>

				<section className="module">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">
                {
                  blog.posts.map((post, index) => <BlogSnippet key={index} blog={post} />)
                }
							</div>

              <Sidebar posts={blog.posts} tags={tags}/>
						</div>
					</div>
				</section>

				<section className="module-sm module-gray">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<nav>
									<ul className="pagination h4">
										<li className="page-item next"><a className="page-link" href="#"><span className="arrows arrows-arrows-slim-right"></span></a></li>
										<li className="page-item active"><a className="page-link" href="#">1</a></li>
										<li className="page-item"><a className="page-link" href="#">2</a></li>
										<li className="page-item"><a className="page-link" href="#">3</a></li>
										<li className="page-item"><a className="page-link" href="#">4</a></li>
										<li className="page-item"><a className="page-link" href="#">5</a></li>
										<li className="page-item prev"><a className="page-link" href="#"><span className="arrows arrows-arrows-slim-left"></span></a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</section>

				<a className="scroll-top" href="#top"><i className="fa fa-angle-up"></i></a>
			</div>
    );
  }
}

const mapStateToProps = state => (
  {
    blog: state.blog,
    tags: state.tag,
  }
);

export default connect(mapStateToProps)(Blog);
