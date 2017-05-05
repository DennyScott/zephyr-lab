import React from 'react';
import PropTypes from 'prop-types';

const blogSnippet = props => {

  return (
    <article className="post">
      <div className="post-preview"><a href="#"><img src={props.blog.image} alt="" /></a></div>
      <div className="post-wrapper">
        <div className="post-header">
          <h2 className="post-title"><a href="blog-single.html">{props.blog.title}</a></h2>
          <ul className="post-meta h5">
            <li>{props.blog.created_at}</li>
            <li><a href="#">Branding</a>, <a href="#">Design</a></li>
          </ul>
        </div>
        <div className="post-content">
          <p>{props.blog.markdown}</p>
        </div>
        <div className="post-more"><a href="#">Read more →</a></div>
      </div>
    </article>
  );
}

blogSnippet.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired,
  })
}

export default blogSnippet;
