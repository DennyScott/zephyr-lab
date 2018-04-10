import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import BlogSnippet from "./blog-snippet/Blog-Snippet";
import Sidebar from "./blog-sidebar/SideBar";

import "./blog.css";

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
                <h1 className="h5">Denny Scott's Blog</h1>
              </div>
              <div className="page-title-secondary">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/blog">Blog</Link>
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
                {blog.posts.map((post, index) => (
                  <BlogSnippet key={index} blog={post} />
                ))}
              </div>

              <Sidebar posts={blog.posts} tags={tags} />
            </div>
          </div>
        </section>
        <a className="scroll-top" href="#top">
          <i className="fa fa-angle-up" />
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blog: state.blog,
  tags: state.tag
});

export default connect(mapStateToProps)(Blog);
