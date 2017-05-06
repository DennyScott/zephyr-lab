import React from 'react';
import PropTypes from 'prop-types';

import PopularPost from './PopularPost';

const sidebar = props => {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <aside className="widget widget_search">
          <form>
            <input className="form-control" type="search" placeholder="Hit enter search..." />
            <button className="search-button" type="submit"><span className="fa fa-search"></span></button>
          </form>
        </aside>

        <aside className="widget widget_categories">
          <div className="widget-title">
            <h5>Categories</h5>
          </div>
          <ul>
            <li><a href="#">Development</a></li>
            <li><a href="#">Photography & Retouch</a></li>
            <li><a href="#">Multipurpose Themes</a></li>
            <li><a href="#">Branding & Technology</a></li>
          </ul>
        </aside>

        <aside className="widget widget_recent_entries_custom">
          <div className="widget-title">
            <h5>Popular Posts</h5>
          </div>
          <ul>
            {
              props.sidebar.popularPosts.map((post, index) => <PopularPost key={index} post={post} />)
            }
          </ul>
        </aside>

        <aside className="widget twitter-feed-widget">
          <div className="widget-title">
            <h5>Twitter Feed</h5>
          </div>
          <div className="twitter-feed" data-twitter="345170787868762112" data-number="2"></div>
        </aside>

        <aside className="widget widget_tag_cloud">
          <div className="widget-title">
            <h5>Tags</h5>
          </div>
          <div className="tagcloud"><a href="#">e-commerce</a><a href="#">portfolio</a><a href="#">responsive</a><a href="#">bootstrap</a><a href="#">business</a><a href="#">corporate</a></div>
        </aside>
      </div>
    </div>
  );
}

sidebar.propTypes = {
  sidebar: PropTypes.shape({
    popularPosts: PropTypes.arrayOf(PropTypes.shape({
      created_at: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })).isRequired
  })
}

export default sidebar;
