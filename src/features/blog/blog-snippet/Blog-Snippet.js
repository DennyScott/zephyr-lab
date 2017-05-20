import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const tagSnippet = tag => (
  <a key={tag.id} href="#">{tag.name} </a>
)

const blogSnippet = props => {
  const { blog } = props;
  const url = 'blog/' + blog.id;
  return (
    <article className="post">
      <div className="post-preview"><Link to={url}><img src={blog.image === null ? "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg" : blog.image} alt="" /></Link></div>
      <div className="post-wrapper">
        <div className="post-header">
          <h2 className="post-title">
            <Link to={url} onClick={() => window.scrollTo(0,0)}>{blog.title}</Link>
            </h2>
          <ul className="post-meta h5">
            <li>{moment(blog.created_at).format('LLL')}</li>
            <li>
              {
                blog.tags.map(tag => tagSnippet(tag))
              }
            </li>
          </ul>
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{__html: blog.html}}>
        </div>
        <div className="post-more">
          <Link onClick={() => window.scrollTo(0,0)} to={url}>Read more →</Link>

          </div>
      </div>
    </article>
  );
}

blogSnippet.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired,
  })
}

export default blogSnippet;
