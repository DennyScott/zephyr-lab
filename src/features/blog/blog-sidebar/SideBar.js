import React from 'react';

import widgetImageOne from '../../../assets/images/widgets/1.jpg';
import widgetImageTwo from '../../../assets/images/widgets/2.jpg';
import widgetImageThree from '../../../assets/images/widgets/3.jpg';

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
            <li className="clearfix">
              <div className="wi"><a href="#"><img src={widgetImageOne} alt="" /></a></div>
              <div className="wb"><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a><span className="post-date">May 8, 2016</span></div>
            </li>
            <li className="clearfix">
              <div className="wi"><a href="#"><img src={widgetImageTwo} alt="" /></a></div>
              <div className="wb"><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a><span className="post-date">May 8, 2016</span></div>
            </li>
            <li className="clearfix">
              <div className="wi"><a href="#"><img src={widgetImageThree} alt="" /></a></div>
              <div className="wb"><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a><span className="post-date">May 8, 2016</span></div>
            </li>
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

export default sidebar;
