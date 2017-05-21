import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import blogOne from '../../../assets/images/blog/1.jpg';

const post = blog => (
  <article className="post">
    <div className="post-preview"><Link to={`blog${blog.url}`}><img src={blogOne} alt="" /></Link></div>
    <div className="post-wrapper">
      <div className="post-header">
        <h2 className="post-title"><a href="blog-single.html">{blog.title}</a></h2>
        <ul className="post-meta h5">
          <li>{moment(blog.published_at).format('LLL')}</li>
        </ul>
      </div>
      <div className="post-more"><Link to={`blog${blog.url}`}>Read More →</Link></div>
    </div>
  </article>

)
const article = posts => {
  let rows = [];
  for(let i = 0; i < 3; i++) {
    rows.push(
      <div key={i} className="col-md-4 post-item">
        {post(posts[i])}
      </div>
    )
  }
    return rows;
}
const news = props => (
  <section className="module">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="module-title text-center">
            <h2>Our News</h2>
            <p className="font-serif">Gain some insight into our processes</p>
          </div>
        </div>
      </div>
      <div className="row blog-grid">
        {article(props.blog.posts)}
      </div>
      <div className="row m-t-50">
        <div className="col-md-12">
          <div className="text-center"><Link className="btn btn-lg btn-circle btn-brand" onClick={() => window.scrollTo(0,0)} to="/blog">Visit blog</Link></div>
        </div>
      </div>
    </div>
  </section>
);

const mapStateToProps = state => (
  {
    blog: state.blog,
  }
);

export default connect(mapStateToProps)(news);
