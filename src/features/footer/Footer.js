import React from 'react';

import logo from '../../assets/images/logo-light.png';
import { connect } from 'react-redux';
import moment from 'moment';

const recentPost = post => (
  <li key={post.id}>
    <a href="#">{post.title}</a>
    <span className="post-date">{moment(post.created_at).format('LLL')}</span>
  </li>
)

const footer = props => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          {/* Text widget */}
          <aside className="widget widget_text">
            <div className="textwidget">
              <p><img src={logo} width="100" alt="" /></p>
              <p>Zephyr Labs is a design and engineering agency. We create digital experiences for high-growth organizations. Our philosophy has been simple: develop for the future today.</p>
            </div>
          </aside>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* Recent entries widget */}
          <aside className="widget widget_recent_entries">
            <div className="widget-title">
              <h5>Recent Posts</h5>
            </div>
            <ul>
              {
                props.posts.slice(0, 3).map(post => recentPost(post))
              }
            </ul>
          </aside>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* Twitter widget */}
          <aside className="widget twitter-feed-widget">
            <div className="widget-title">
              <h5>Contact</h5>
            </div>
            E-mail: <a href="mailto:supprt@zephyrlabs.com">support@zephyrlabs.com</a>
            <br/>
            Phone: 8 800 123 4567 <br/>
            Fax: 8 800 123 4567 <br/>
          </aside>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* Tags widget */}
          <aside className="widget widget_tag_cloud">
            <div className="widget-title">
              <h5>Tags</h5>
            </div>
            <div className="tagcloud">
              {
                props.tags.map(tag => (<a href="#" key={tag.id}>{tag.name}</a>))
              }
            </div>
          </aside>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center"><span className="copyright">© 2017 Zephyr Labs, All Rights Reserved.</span></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const mapStateToProps = state => (
  {
    posts: state.blog.posts,
    tags: state.tag
  }
)

export default connect(mapStateToProps)(footer);
