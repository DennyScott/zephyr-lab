import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import widgetImageOne from '../../../assets/images/widgets/1.jpg';

const category = (tag, i) => (
  <li key={i}> {tag} </li>
)

const recentPosts = post => (
  <li key={post.id} className="clearfix">
    <div className="wi"><Link to={`/blog/${post.id}`}><img src={widgetImageOne} alt="" /></Link></div>
    <div className="wb">
      <Link to={`/blog/${post.id}`}>{post.title}</Link>
      <span className="post-date">{moment(post.created_at).format('LLL')}</span>
    </div>
  </li>
)

const sidebar = props => {
  return (
    <div className="col-lg-4">
      <div className="sidebar">

        <aside className="widget widget_categories">
          <div className="widget-title">
            <h5>Categories</h5>
          </div>
          <ul>
            {
              props.tags.map((tag, i) => category(tag, i))
            }
          </ul>
        </aside>

        <aside className="widget widget_recent_entries_custom">
          <div className="widget-title">
            <h5>Recent Posts</h5>
          </div>
          <ul>
            {
              props.posts.slice(0, 3).map(post => recentPosts(post))
            }
          </ul>
        </aside>
      </div>
    </div>
  );
}

sidebar.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
}

export default sidebar;
