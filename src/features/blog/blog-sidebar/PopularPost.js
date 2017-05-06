import PropTypes from 'prop-types';
import React from 'react';

import widgetImage from '../../../assets/images/widgets/1.jpg';

const popularPost = props => {
  return (
    <li className="clearfix">
      <div className="wi"><a href="#"><img src={widgetImage} alt="" /></a></div>
      <div className="wb"><a href="#">{props.post.text}</a><span className="post-date">{props.post.created_at}</span></div>
    </li>
  );
}

popularPost.propTypes = {
  post: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })
}

export default popularPost;
